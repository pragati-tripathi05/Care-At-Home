const userSignup = async (req,res) => {
    async (req, res) => {
        const { name, email, password } = req.body;
        const existing = await User.findOne({email})
        if(existing){
          res.send("User already exists")
        }
        else{
        bcrypt.hash(password, 4, async function (err, hash) {
          if (err) {
            res.send("Something went wrong, please signup later");
          } else {
            const user = new User({ name, email, password: hash });
            await user.save();
            res.send("User Registration Successful");
          }
        });
      }
      }
}

const userLogin = async (req, res) => {
    const {email, password } = req.body;
    const user = await User.findOne({email: email})
    const hash = user.password
    const userId = user._id
    bcrypt.compare(password, hash, function(err, result) {
        if(result){
            const token = jwt.sign({ id: userId }, process.env.secret_key);
            res.send({msg: "Login successful" , token : token})
        }
        else{
            res.send("Wrong credentials")
        }
    });
  }

module.exports = {userSignup , userLogin}