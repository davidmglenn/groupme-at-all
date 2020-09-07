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
    var beefJson = [
  {
    "Year": 2010,
    "Player": "Brandon Banks",
    "Pos": "WR",
    "School": "Kansas State",
    "Height": "5-7",
    "Weight": 149,
    "Forty": 4.37,
    "Vertical": 31,
    "BenchReps": "missing",
    "BroadJump": 113,
    "Threecone": 6.88,
    "Shuttle": 4.29
  },
  {
    "Year": 2002,
    "Player": "Aaron Lockett",
    "Pos": "WR",
    "School": "Kansas State",
    "Height": "5-7",
    "Weight": 155,
    "Forty": 4.31,
    "Vertical": 35,
    "BenchReps": "missing",
    "BroadJump": 119,
    "Threecone": 6.84,
    "Shuttle": 4.11
  },
  {
    "Year": 2015,
    "Player": "J.J. Nelson",
    "Pos": "WR",
    "School": "Ala-Birmingham",
    "Height": "5-10",
    "Weight": 156,
    "Forty": 4.28,
    "Vertical": 36,
    "BenchReps": "missing",
    "BroadJump": 127,
    "Threecone": 7.02,
    "Shuttle": 4.15
  },
  {
    "Year": 2019,
    "Player": "Jovon Durante",
    "Pos": "WR",
    "School": "Florida Atlantic",
    "Height": "5-11",
    "Weight": 160,
    "Forty": 4.55,
    "Vertical": 31.5,
    "BenchReps": "missing",
    "BroadJump": 120,
    "Threecone": 7,
    "Shuttle": 4.31
  },
  {
    "Year": 2008,
    "Player": "Brandon Breazell",
    "Pos": "WR",
    "School": "UCLA",
    "Height": "6-0",
    "Weight": 160,
    "Forty": 4.41,
    "Vertical": 30.5,
    "BenchReps": "missing",
    "BroadJump": 115,
    "Threecone": 6.97,
    "Shuttle": "missing"
  },
  {
    "Year": 2014,
    "Player": "Tevin Reese",
    "Pos": "WR",
    "School": "Baylor",
    "Height": "5-10",
    "Weight": 163,
    "Forty": 4.46,
    "Vertical": 41,
    "BenchReps": "missing",
    "BroadJump": 132,
    "Threecone": 6.63,
    "Shuttle": 4.18
  },
  {
    "Year": 2014,
    "Player": "Cairo Santos",
    "Pos": "K",
    "School": "Tulane",
    "Height": "5-8",
    "Weight": 164,
    "Forty": 4.76,
    "Vertical": "missing",
    "BenchReps": "missing",
    "BroadJump": "missing",
    "Threecone": "missing",
    "Shuttle": "missing"
  },
  {
    "Year": 2014,
    "Player": "Jalen Saunders",
    "Pos": "WR",
    "School": "Oklahoma",
    "Height": "5-9",
    "Weight": 165,
    "Forty": 4.44,
    "Vertical": 34,
    "BenchReps": "missing",
    "BroadJump": 122,
    "Threecone": "missing",
    "Shuttle": "missing"
  },
  {
    "Year": 2010,
    "Player": "Trindon Holliday",
    "Pos": "WR",
    "School": "LSU",
    "Height": "5-5",
    "Weight": 166,
    "Forty": 4.34,
    "Vertical": 42,
    "BenchReps": 10,
    "BroadJump": 116,
    "Threecone": 6.54,
    "Shuttle": 4.48
  },
  {
    "Year": 2019,
    "Player": "Marquise Brown",
    "Pos": "WR",
    "School": "Oklahoma",
    "Height": "5-9",
    "Weight": 166,
    "Forty": "missing",
    "Vertical": "missing",
    "BenchReps": "missing",
    "BroadJump": "missing",
    "Threecone": "missing",
    "Shuttle": "missing"
  },
  {
    "Year": 2017,
    "Player": "Jake Elliott",
    "Pos": "K",
    "School": "Memphis",
    "Height": "5-9",
    "Weight": 167,
    "Forty": 4.79,
    "Vertical": "missing",
    "BenchReps": "missing",
    "BroadJump": "missing",
    "Threecone": "missing",
    "Shuttle": "missing"
  },
  {
    "Year": 2000,
    "Player": "Kyle Atteberry",
    "Pos": "K",
    "School": "Baylor",
    "Height": "6-0",
    "Weight": 167,
    "Forty": "missing",
    "Vertical": "missing",
    "BenchReps": "missing",
    "BroadJump": "missing",
    "Threecone": "missing",
    "Shuttle": "missing"
  },
  {
    "Year": 2001,
    "Player": "Arnold Jackson",
    "Pos": "WR",
    "School": "Louisville",
    "Height": "5-8",
    "Weight": 167,
    "Forty": 4.48,
    "Vertical": 41,
    "BenchReps": "missing",
    "BroadJump": 127,
    "Threecone": 7.42,
    "Shuttle": 4.11
  },
  {
    "Year": 2013,
    "Player": "Onterio McCalebb",
    "Pos": "RB",
    "School": "Auburn",
    "Height": "5-10",
    "Weight": 168,
    "Forty": 4.34,
    "Vertical": 34,
    "BenchReps": "missing",
    "BroadJump": 121,
    "Threecone": "missing",
    "Shuttle": "missing"
  },
  {
    "Year": 2005,
    "Player": "Roscoe Parrish",
    "Pos": "WR",
    "School": "Miami (FL)",
    "Height": "5-10",
    "Weight": 168,
    "Forty": 4.37,
    "Vertical": "missing",
    "BenchReps": "missing",
    "BroadJump": "missing",
    "Threecone": "missing",
    "Shuttle": "missing"
  },
  {
    "Year": 2005,
    "Player": "Cedrick Williams",
    "Pos": "CB",
    "School": "Kansas State",
    "Height": "5-10",
    "Weight": 168,
    "Forty": 4.5,
    "Vertical": 35,
    "BenchReps": 13,
    "BroadJump": 121,
    "Threecone": 7.24,
    "Shuttle": 4.22
  },
  {
    "Year": 2013,
    "Player": "Nickell Robey",
    "Pos": "CB",
    "School": "USC",
    "Height": "5-7",
    "Weight": 169,
    "Forty": 4.53,
    "Vertical": 37.5,
    "BenchReps": 10,
    "BroadJump": 127,
    "Threecone": 6.74,
    "Shuttle": 4.09
  },
  {
    "Year": 2008,
    "Player": "DeSean Jackson",
    "Pos": "WR",
    "School": "California",
    "Height": "5-10",
    "Weight": 169,
    "Forty": 4.35,
    "Vertical": "missing",
    "BenchReps": "missing",
    "BroadJump": 120,
    "Threecone": "missing",
    "Shuttle": "missing"
  },
  {
    "Year": 2003,
    "Player": "Shaun McDonald",
    "Pos": "WR",
    "School": "Arizona State",
    "Height": "5-8",
    "Weight": 169,
    "Forty": 4.43,
    "Vertical": "missing",
    "BenchReps": "missing",
    "BroadJump": "missing",
    "Threecone": "missing",
    "Shuttle": "missing"
  },
  {
    "Year": 2019,
    "Player": "Hamp Cheevers",
    "Pos": "CB",
    "School": "Boston Col.",
    "Height": "5-9",
    "Weight": 169,
    "Forty": 4.52,
    "Vertical": 39,
    "BenchReps": 8,
    "BroadJump": 122,
    "Threecone": 6.96,
    "Shuttle": 4.25
  },
  {
    "Year": 2000,
    "Player": "Todd Pinkston",
    "Pos": "WR",
    "School": "Southern Miss",
    "Height": "6-2",
    "Weight": 169,
    "Forty": 4.45,
    "Vertical": "missing",
    "BenchReps": "missing",
    "BroadJump": "missing",
    "Threecone": "missing",
    "Shuttle": "missing"
  },
  {
    "Year": 2009,
    "Player": "Bruce Johnson",
    "Pos": "CB",
    "School": "Miami (FL)",
    "Height": "5-9",
    "Weight": 170,
    "Forty": 4.42,
    "Vertical": 34.5,
    "BenchReps": 6,
    "BroadJump": 125,
    "Threecone": 6.71,
    "Shuttle": 4.05
  },
  {
    "Year": 2008,
    "Player": "Anthony Alridge",
    "Pos": "RB",
    "School": "Houston",
    "Height": "5-9",
    "Weight": 170,
    "Forty": 4.36,
    "Vertical": 30.5,
    "BenchReps": "missing",
    "BroadJump": 134,
    "Threecone": 6.88,
    "Shuttle": "missing"
  },
  {
    "Year": 2020,
    "Player": "Jeff Thomas",
    "Pos": "WR",
    "School": "Miami",
    "Height": "5-9",
    "Weight": 170,
    "Forty": 4.45,
    "Vertical": 36.5,
    "BenchReps": "missing",
    "BroadJump": 125,
    "Threecone": "missing",
    "Shuttle": "missing"
  },
  {
    "Year": 2008,
    "Player": "Alexis Serna",
    "Pos": "K",
    "School": "Oregon State",
    "Height": "5-6",
    "Weight": 170,
    "Forty": 4.62,
    "Vertical": "missing",
    "BenchReps": "missing",
    "BroadJump": "missing",
    "Threecone": "missing",
    "Shuttle": "missing"
  }
];
    var names = name.split(" ");
    var first = names[0];
    var last = names[1];
    var firstlast = first + " " + last;
    
    var nullString = "No matches found"; 
    var printstring = "";
    var i;
    for (i = 0; i < beefJson.length; i++) {
      var beefEntry = beefJson[i];
      var beefEntryName = beefEntry.Player;
      if(beefEntryName == firstlast){
        printstring += firstlast;
        printstring += " ";
        printstring += beefEntry.Year;
        printstring += " ";
        printstring += beefEntry.Pos;
        printstring += " from ";
        printstring += beefEntry.School;
        printstring += ".";
        printstring += " Height: ";
        printstring += beefEntry.Height;
        printstring += " Weight: ";
        printstring += beefEntry.Weight;
        printstring += " 40 yard dash: ";
        printstring += beefEntry.Forty;
        printstring += " Vertical: ";
        printstring += beefEntry.Vertical;
        printstring += " Bench Reps: ";
        printstring += beefEntry.BenchReps;
        printstring += " Broad Jump: ";
        printstring += beefEntry.BroadJump;
        printstring += " Three Cone: ";
        printstring += beefEntry.Threecone;
        printstring += " Shuttle: ";
        printstring += beefEntry.Shuttle;
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
