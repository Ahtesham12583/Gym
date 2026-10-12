const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const nodemailer = require("nodemailer");
const bcrypt = require("bcryptjs");
const crypto = require("crypto");
require("dotenv").config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());


// ===============================
// MongoDB Connection
// ===============================

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB Connected Successfully ✅");
  })
  .catch((error) => {
    console.log("MongoDB Connection Failed ❌");
    console.log(error.message);
  });


// ===============================
// User Schema
// ===============================

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },

    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);


// ===============================
// Pending Signup Schema
// ===============================

const pendingSignupSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },

    password: {
      type: String,
      required: true,
    },

    otp: {
      type: String,
      required: true,
    },

    expiresAt: {
      type: Date,
      required: true,
      index: true,
    },
  },
  {
    timestamps: true,
  }
);

const PendingSignup = mongoose.model(
  "PendingSignup",
  pendingSignupSchema
);


// ===============================
// Gmail Transporter
// ===============================

const transporter = nodemailer.createTransport({
  service: "gmail",

  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});


// ===============================
// Test Route
// ===============================

app.get("/", (req, res) => {
  res.send("Fitness Hub Backend is Running 🚀");
});


// ===============================
// SIGNUP - SEND OTP
// ===============================

app.post("/api/auth/signup", async (req, res) => {
     console.log("SIGNUP REQUEST RECEIVED ✅");
  try {
    const { name, email, password } = req.body;

    // Check fields
    if (!name || !email || !password) {
      return res.status(400).json({
        message: "Please fill all fields",
      });
    }

    const cleanEmail = email.toLowerCase().trim();


    // Check if user already exists
    const existingUser = await User.findOne({
      email: cleanEmail,
    });

    if (existingUser) {
      return res.status(400).json({
        message: "Email already registered",
      });
    }


    // Delete old pending signup
    await PendingSignup.deleteOne({
      email: cleanEmail,
    });


    // Generate 6 digit OTP
    const otp = crypto
      .randomInt(100000, 1000000)
      .toString();


    // OTP expires in 5 minutes
    const expiresAt = new Date(
      Date.now() + 5 * 60 * 1000
    );


    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);


    // Save pending signup
    await PendingSignup.create({
      name,
      email: cleanEmail,
      password: hashedPassword,
      otp,
      expiresAt,
    });


    // Send OTP email
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: cleanEmail,
      subject: "Fitness Hub - Email Verification OTP",

      html: `
        <div style="
          font-family: Arial, sans-serif;
          max-width: 500px;
          margin: auto;
          padding: 30px;
          background: #111;
          color: white;
          border-radius: 10px;
        ">

          <h1 style="color: #ff0000;">
            Fitness Hub
          </h1>

          <h2>Email Verification</h2>

          <p>
            Hello ${name},
          </p>

          <p>
            Your Fitness Hub verification OTP is:
          </p>

          <h1 style="
            letter-spacing: 8px;
            color: #ff0000;
          ">
            ${otp}
          </h1>

          <p>
            This OTP will expire in <strong>5 minutes</strong>.
          </p>

          <p>
            If you did not create an account, you can ignore this email.
          </p>

        </div>
      `,
    });


    console.log(`OTP sent to ${cleanEmail} ✅`);

    res.status(200).json({
      message: "OTP sent successfully",
    });

  } catch (error) {

    console.log("Signup Error ❌");
    console.log(error.message);

    res.status(500).json({
      message: "Something went wrong",
    });
  }
});


// ===============================
// VERIFY OTP
// ===============================

app.post("/api/auth/verify-otp", async (req, res) => {
  try {

    const { email, otp } = req.body;

    if (!email || !otp) {
      return res.status(400).json({
        message: "Email and OTP are required",
      });
    }


    const cleanEmail = email.toLowerCase().trim();


    // Find pending signup
    const pendingSignup = await PendingSignup.findOne({
      email: cleanEmail,
    });


    if (!pendingSignup) {
      return res.status(400).json({
        message: "OTP expired or signup not found",
      });
    }


    // Check expiration
    if (new Date() > pendingSignup.expiresAt) {

      await PendingSignup.deleteOne({
        email: cleanEmail,
      });

      return res.status(400).json({
        message: "OTP has expired",
      });
    }


    // Check OTP
    if (pendingSignup.otp !== otp.toString()) {
      return res.status(400).json({
        message: "Invalid OTP",
      });
    }


    // Create actual user
    const user = await User.create({
      name: pendingSignup.name,
      email: pendingSignup.email,
      password: pendingSignup.password,
    });


    // Delete pending signup
    await PendingSignup.deleteOne({
      email: cleanEmail,
    });


    console.log(`User registered successfully: ${user.email} ✅`);


    res.status(201).json({
      message: "Account created successfully",
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
    });

  } catch (error) {

    console.log("OTP Verification Error ❌");
    console.log(error.message);

    res.status(500).json({
      message: "Something went wrong",
    });
  }
});


// ===============================
// SERVER
// ===============================

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(
    `Server running on http://localhost:${PORT}`
  );
});