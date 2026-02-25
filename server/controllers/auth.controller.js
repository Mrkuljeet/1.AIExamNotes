export const googleAuth = async (req, res) => {
  try {
    console.log("BODY:", req.body)

    const { name, email } = req.body

    if (!name || !email) {
      return res.status(400).json({ message: "Name or Email missing" })
    }

    let user = await UserModel.findOne({ email })

    if (!user) {
      user = await UserModel.create({ name, email })
    }

    const token = await getToken(user._id)

    res.cookie("token", token, {
      httpOnly: true,
      secure: true,
      sameSite: "none",
      path: "/"
    })

    return res.status(200).json(user)

  } catch (error) {
    console.log("GOOGLE AUTH ERROR:", error)
    return res.status(500).json({ message: error.message })
  }
}
