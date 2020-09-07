const https = require("https");

// Bot configs read in from environment
const room_id = process.env.HUBOT_GROUPME_ROOM_ID;
const bot_id = process.env.HUBOT_GROUPME_BOT_ID;
const token = process.env.HUBOT_GROUPME_TOKEN;

if (!room_id || !bot_id || !token) {
  console.error(
    `@all ERROR: Unable to read full environment.
    Did you configure environment variables correctly?
    - HUBOT_GROUPME_ROOM_ID
    - HUBOT_GROUPME_BOT_ID
    - HUBOT_GROUPME_TOKEN`
  );
  process.exit(1);
}

class AllBot {
  constructor(robot) {
    this.robot = robot;
  }

  beefResponse(res, name){
    var names = name.split(" ");
    var first = names[0];
    var last = names[1];
    var firstlast = first + " " + last;
    
    var beefJson = [
  {
    "Player": "Brandon Banks",
    "Year": 2010,
    "Pos": "WR",
    "Height": "5-7",
    "Weight": 149,
    "Forty": 4.37,
    "Vertical": 31,
    "BenchReps": "Empty!",
    "Broad Jump": 113,
    "Threecone": 6.88,
    "Shuttle": 4.29
  },
  {
    "Player": "Aaron Lockett",
    "Year": 2002,
    "Pos": "WR",
    "Height": "5-7",
    "Weight": 155,
    "Forty": 4.31,
    "Vertical": 35,
    "BenchReps": "Empty!",
    "Broad Jump": 119,
    "Threecone": 6.84,
    "Shuttle": 4.11
  },
  {
    "Player": "Aaron Lockett",
    "Year": 2021,
    "Pos": "WR",
    "Height": "5-7",
    "Weight": 555,
    "Forty": 3.31,
    "Vertical": 99,
    "BenchReps": "Empty!",
    "Broad Jump": 119,
    "Threecone": 6.84,
    "Shuttle": 4.11
  },
  {
    "Player": "J.J. Nelson",
    "Year": 2015,
    "Pos": "WR",
    "Height": "5-10",
    "Weight": 156,
    "Forty": 4.28,
    "Vertical": 36,
    "BenchReps": "Empty!",
    "Broad Jump": 127,
    "Threecone": 7.02,
    "Shuttle": 4.15
  },
  {
    "Player": "Jovon Durante",
    "Year": 2019,
    "Pos": "WR",
    "Height": "5-11",
    "Weight": 160,
    "Forty": 4.55,
    "Vertical": 31.5,
    "BenchReps": "Empty!",
    "Broad Jump": 120,
    "Threecone": 7,
    "Shuttle": 4.31
  },
  {
    "Player": "Brandon Breazell",
    "Year": 2008,
    "Pos": "WR",
    "Height": "6-0",
    "Weight": 160,
    "Forty": 4.41,
    "Vertical": 30.5,
    "BenchReps": "Empty!",
    "Broad Jump": 115,
    "Threecone": 6.97,
    "Shuttle": "Empty!"
  },
  {
    "Player": "Tevin Reese",
    "Year": 2014,
    "Pos": "WR",
    "Height": "5-10",
    "Weight": 163,
    "Forty": 4.46,
    "Vertical": 41,
    "BenchReps": "Empty!",
    "Broad Jump": 132,
    "Threecone": 6.63,
    "Shuttle": 4.18
  },
  {
    "Player": "Cairo Santos",
    "Year": 2014,
    "Pos": "K",
    "Height": "5-8",
    "Weight": 164,
    "Forty": 4.76,
    "Vertical": "Empty!",
    "BenchReps": "Empty!",
    "Broad Jump": "Empty!",
    "Threecone": "Empty!",
    "Shuttle": "Empty!"
  },
  {
    "Player": "Jalen Saunders",
    "Year": 2014,
    "Pos": "WR",
    "Height": "5-9",
    "Weight": 165,
    "Forty": 4.44,
    "Vertical": 34,
    "BenchReps": "Empty!",
    "Broad Jump": 122,
    "Threecone": "Empty!",
    "Shuttle": "Empty!"
  },
  {
    "Player": "Trindon Holliday",
    "Year": 2010,
    "Pos": "WR",
    "Height": "5-5",
    "Weight": 166,
    "Forty": 4.34,
    "Vertical": 42,
    "BenchReps": 10,
    "Broad Jump": 116,
    "Threecone": 6.54,
    "Shuttle": 4.48
  },
  {
    "Player": "Marquise Brown",
    "Year": 2019,
    "Pos": "WR",
    "Height": "5-9",
    "Weight": 166,
    "Forty": "Empty!",
    "Vertical": "Empty!",
    "BenchReps": "Empty!",
    "Broad Jump": "Empty!",
    "Threecone": "Empty!",
    "Shuttle": "Empty!"
  },
  {
    "Player": "Jake Elliott",
    "Year": 2017,
    "Pos": "K",
    "Height": "5-9",
    "Weight": 167,
    "Forty": 4.79,
    "Vertical": "Empty!",
    "BenchReps": "Empty!",
    "Broad Jump": "Empty!",
    "Threecone": "Empty!",
    "Shuttle": "Empty!"
  },
  {
    "Player": "Mike Williams",
    "Year": 2002,
    "Pos": "OT",
    "Height": "6-6",
    "Weight": 375,
    "Forty": 5.3,
    "Vertical": 30,
    "BenchReps": 29,
    "Broad Jump": 102,
    "Threecone": "Empty!",
    "Shuttle": "Empty!"
  }
];
    var printstring = "placeholder text" + first + "2place2holder" + last;    
    var i;
    for (i = 0; i < beefJson.length; i++) {
        if(beefJson[i].Player == firstLast){
            printstring = "inner p holder";
        }
    }     
    res.send(printstring); 
  }
  
  saveBlacklist() {
    console.log("Saving blacklist");
    this.robot.brain.set("blacklist", this.blacklist);
    this.robot.brain.save();
  }

  loadBlacklist() {
    this.blacklist = this.robot.brain.get("blacklist");
    if (this.blacklist) console.log("Blacklist loaded successfully.");
    else console.warn("Failed to load blacklist.");
  }

  addToBlacklist(item) {
    this.blacklist.push(item);
    this.saveBlacklist();
  }

  removeFromBlacklist(item) {
    let index = this.blacklist.indexOf(item);
    if (index !== -1) {
      this.blacklist.splice(index, 1);
      this.saveBlacklist();
      console.log(`Successfully removed ${item} from blacklist.`);
    } else {
      console.warn(`Unable to find ${item} in blacklist!`);
    }
  }

  getUserByName(_name) {
    let name = _name.trim();
    if (name[0] == "@") {
      name = name.slice(1);
    }
    let user = this.robot.brain.userForName(name);
    if (!user.user_id) return null;
    else return user;
  }

  getUserById(id) {
    let user = this.robot.brain.userForId(id);
    if (!user.user_id) return null;
    else return user;
  }

  respondToID(res, target) {
    // Get ID command
    console.log(`Looking for user ID by name: ${target}`);
    const found = this.getUserByName(target);

    if (found) {
      const id = found.user_id;
      console.log(`Found ID ${id} by name ${target}`);
      res.send(`${target}: ${id}`);
    } else {
      res.send(`Could not find a user with the name ${target}`);
    }
  }

  respondToName(res, target) {
    console.log(`Looking for user name by ID: ${target}`);
    const found = this.getUserById(target);

    if (found) {
      const name = found.name;
      console.log(`Found name ${name} by ID ${target}`);
      res.send(`${target}: ${name}`);
    } else {
      res.send(`Could not find a user with the ID ${target}`);
    }
  }

  respondToViewBlacklist(res) {
    // Raw blacklist
    if (res.match[1]) return res.send(JSON.stringify(this.blacklist));

    const blacklistNames = this.blacklist.map(
      user => this.getUserById(user).name
    );

    if (blacklistNames.length > 0) return res.send(blacklistNames.join(", "));
    else return res.send("There are currently no users blacklisted.");
  }

  respondToBlacklist(res, target) {
    const user = this.getUserByName(target);

    if (!user) return res.send(`Could not find a user with the name ${target}`);

    console.log(`Blacklisting ${target}, ${user.user_id}`);
    this.addToBlacklist(user.user_id);
    res.send(`Blacklisted ${target} successfully.`);
  }

  respondToWhitelist(res, target) {
    const user = this.getUserByName(target);

    if (!user) return res.send(`Could not find a user with the name ${target}`);

    console.log(`Whitelisting ${target}, ${user.user_id}`);
    this.removeFromBlacklist(user.user_id);
    res.send(`Whitelisted ${target} successfully`);
  }

  respondToAtAll(res) {
    // Select the longer of the two options.
    // TODO: Maybe combine them?
    const text =
      res.match[0].length > res.match[1].length ? res.match[0] : res.match[1];

    // Default text if not long enough
    // TODO: Is this necessary? Can't we tag everyone on a 1 character message?
    // if (text.length < users.length)
    //   text = "Please check the GroupMe, everyone.";

    // The message for use in GroupMe API
    const message = {
      text,
      bot_id,
      attachments: [{ loci: [], type: "mentions", user_ids: [] }]
    };

    // Add "mention" for each user
    const users = this.robot.brain.users();
    Object.keys(users).map((userID, index) => {
      // Skip blacklisted users
      if (this.blacklist.indexOf(userID) !== -1) return;

      // TODO: Would [i, i] work?
      message.attachments[0].loci.push([index, index + 1]);
      message.attachments[0].user_ids.push(userID);
    });

    // Send the request
    const json = JSON.stringify(message);
    const groupmeAPIOptions = {
      agent: false,
      host: "api.groupme.com",
      path: "/v3/bots/post",
      port: 443,
      method: "POST",
      headers: {
        "Content-Length": json.length,
        "Content-Type": "application/json",
        "X-Access-Token": token
      }
    };
    const req = https.request(groupmeAPIOptions, response => {
      let data = "";
      response.on("data", chunk => (data += chunk));
      response.on("end", () =>
        console.log(`[GROUPME RESPONSE] ${response.statusCode} ${data}`)
      );
    });
    req.end(json);
  }

  // Defines the main logic of the bot
  run() {
    this.robot.hear(/beefbot (.+)/i, res => this.beefResponse(res, res.match[1]));
  }
}

module.exports = robot => {
  const bot = new AllBot(robot);
  bot.run();
};
