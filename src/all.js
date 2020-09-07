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
    "Year": 2019,
    "Player": "Dexter Lawrence",
    "Pos": "DL",
    "School": "Clemson",
    "Height": "6-4",
    "Weight": 342,
    "Forty": 5.05,
    "Vertical": "missing",
    "BenchReps": 36,
    "BroadJump": "missing",
    "Threecone": "missing",
    "Shuttle": "missing"
  },
  {
    "Year": 2002,
    "Player": "Bryant McKinnie",
    "Pos": "OT",
    "School": "Miami (FL)",
    "Height": "6-8",
    "Weight": 343,
    "Forty": 5.13,
    "Vertical": "missing",
    "BenchReps": "missing",
    "BroadJump": "missing",
    "Threecone": "missing",
    "Shuttle": "missing"
  },
  {
    "Year": 2005,
    "Player": "Claude Terrell",
    "Pos": "OG",
    "School": "New Mexico",
    "Height": "6-2",
    "Weight": 343,
    "Forty": 5.42,
    "Vertical": 24.5,
    "BenchReps": 27,
    "BroadJump": 89,
    "Threecone": 8.17,
    "Shuttle": 4.75
  },
  {
    "Year": 2008,
    "Player": "Brandon Keith",
    "Pos": "OT",
    "School": "New Mexico",
    "Height": "6-5",
    "Weight": 343,
    "Forty": 5.27,
    "Vertical": 26,
    "BenchReps": 31,
    "BroadJump": "missing",
    "Threecone": "missing",
    "Shuttle": "missing"
  },
  {
    "Year": 2017,
    "Player": "David Sharpe",
    "Pos": "OT",
    "School": "Florida",
    "Height": "6-6",
    "Weight": 343,
    "Forty": 5.44,
    "Vertical": 20.5,
    "BenchReps": 19,
    "BroadJump": 97,
    "Threecone": 7.87,
    "Shuttle": 4.78
  },
  {
    "Year": 2002,
    "Player": "Langston Walker",
    "Pos": "OT",
    "School": "California",
    "Height": "6-8",
    "Weight": 344,
    "Forty": 5.26,
    "Vertical": 28.5,
    "BenchReps": 21,
    "BroadJump": 102,
    "Threecone": 8.09,
    "Shuttle": 4.95
  },
  {
    "Year": 2004,
    "Player": "Junior Siavii",
    "Pos": "DT",
    "School": "Oregon",
    "Height": "6-4",
    "Weight": 344,
    "Forty": 5.16,
    "Vertical": 24.5,
    "BenchReps": 31,
    "BroadJump": 93,
    "Threecone": 7.93,
    "Shuttle": 4.84
  },
  {
    "Year": 2005,
    "Player": "Chris Kemoeatu",
    "Pos": "OG",
    "School": "Utah",
    "Height": "6-3",
    "Weight": 344,
    "Forty": 5.34,
    "Vertical": 29,
    "BenchReps": 26,
    "BroadJump": 98,
    "Threecone": 7.75,
    "Shuttle": 4.54
  },
  {
    "Year": 2006,
    "Player": "Ryan O'Callaghan",
    "Pos": "OT",
    "School": "California",
    "Height": "6-7",
    "Weight": 344,
    "Forty": 5.39,
    "Vertical": 25,
    "BenchReps": 21,
    "BroadJump": 92,
    "Threecone": "missing",
    "Shuttle": "missing"
  },
  {
    "Year": 2007,
    "Player": "Paul Soliai",
    "Pos": "DT",
    "School": "Utah",
    "Height": "6-4",
    "Weight": 344,
    "Forty": 5.1,
    "Vertical": 29.5,
    "BenchReps": "missing",
    "BroadJump": 103,
    "Threecone": 7.66,
    "Shuttle": 4.69
  },
  {
    "Year": 2020,
    "Player": "Mike Onwenu",
    "Pos": "OL",
    "School": "Michigan",
    "Height": "6-3",
    "Weight": 344,
    "Forty": "missing",
    "Vertical": "missing",
    "BenchReps": 26,
    "BroadJump": "missing",
    "Threecone": "missing",
    "Shuttle": "missing"
  },
  {
    "Year": 2000,
    "Player": "Matt Johnson",
    "Pos": "OG",
    "School": "BYU",
    "Height": "6-4",
    "Weight": 345,
    "Forty": 5.56,
    "Vertical": 28,
    "BenchReps": 35,
    "BroadJump": 99,
    "Threecone": 8.07,
    "Shuttle": 4.99
  },
  {
    "Year": 2001,
    "Player": "Pork Chop Womack",
    "Pos": "OG",
    "School": "Mississippi State",
    "Height": "6-4",
    "Weight": 345,
    "Forty": 5.51,
    "Vertical": 29.5,
    "BenchReps": 23,
    "BroadJump": 97,
    "Threecone": 8.78,
    "Shuttle": 4.96
  },
  {
    "Year": 2004,
    "Player": "Carlos Joseph",
    "Pos": "OT",
    "School": "Miami (FL)",
    "Height": "6-6",
    "Weight": 345,
    "Forty": 5.33,
    "Vertical": "missing",
    "BenchReps": 29,
    "BroadJump": "missing",
    "Threecone": "missing",
    "Shuttle": "missing"
  },
  {
    "Year": 2012,
    "Player": "Cordy Glenn",
    "Pos": "OT",
    "School": "Georgia",
    "Height": "6-6",
    "Weight": 345,
    "Forty": 5.08,
    "Vertical": 23.5,
    "BenchReps": 31,
    "BroadJump": 93,
    "Threecone": 8.13,
    "Shuttle": 5
  },
  {
    "Year": 2018,
    "Player": "Orlando Brown",
    "Pos": "OT",
    "School": "Oklahoma",
    "Height": "6-8",
    "Weight": 345,
    "Forty": 5.85,
    "Vertical": 19.5,
    "BenchReps": 14,
    "BroadJump": 82,
    "Threecone": 7.87,
    "Shuttle": 5.38
  },
  {
    "Year": 2011,
    "Player": "Kenrick Ellis",
    "Pos": "DT",
    "School": "Kansas State",
    "Height": "6-5",
    "Weight": 346,
    "Forty": 5.19,
    "Vertical": "missing",
    "BenchReps": 26,
    "BroadJump": "missing",
    "Threecone": "missing",
    "Shuttle": "missing"
  },
  {
    "Year": 2012,
    "Player": "Dontari Poe",
    "Pos": "DT",
    "School": "Memphis",
    "Height": "6-3",
    "Weight": 346,
    "Forty": 4.89,
    "Vertical": 29.5,
    "BenchReps": 44,
    "BroadJump": 105,
    "Threecone": 7.9,
    "Shuttle": 4.56
  },
  {
    "Year": 2013,
    "Player": "John Jenkins",
    "Pos": "DT",
    "School": "Georgia",
    "Height": "6-4",
    "Weight": 346,
    "Forty": 5.21,
    "Vertical": "missing",
    "BenchReps": 30,
    "BroadJump": "missing",
    "Threecone": "missing",
    "Shuttle": "missing"
  },
  {
    "Year": 2003,
    "Player": "Derrick Dockery",
    "Pos": "OG",
    "School": "Texas",
    "Height": "6-6",
    "Weight": 347,
    "Forty": 5.58,
    "Vertical": 25,
    "BenchReps": "missing",
    "BroadJump": 92,
    "Threecone": "missing",
    "Shuttle": "missing"
  },
  {
    "Year": 2005,
    "Player": "Rob Petitti",
    "Pos": "OT",
    "School": "Pittsburgh",
    "Height": "6-6",
    "Weight": 347,
    "Forty": 5.48,
    "Vertical": "missing",
    "BenchReps": "missing",
    "BroadJump": "missing",
    "Threecone": "missing",
    "Shuttle": "missing"
  },
  {
    "Year": 2008,
    "Player": "Frank Okam",
    "Pos": "DT",
    "School": "Texas",
    "Height": "6-4",
    "Weight": 347,
    "Forty": 5.32,
    "Vertical": 23,
    "BenchReps": 32,
    "BroadJump": 104,
    "Threecone": 8.07,
    "Shuttle": 4.95
  },
  {
    "Year": 2018,
    "Player": "Vita Vea",
    "Pos": "DT",
    "School": "Washington",
    "Height": "6-4",
    "Weight": 347,
    "Forty": 5.1,
    "Vertical": "missing",
    "BenchReps": 41,
    "BroadJump": "missing",
    "Threecone": "missing",
    "Shuttle": "missing"
  },
  {
    "Year": 2001,
    "Player": "Char-Ron Dorsey",
    "Pos": "OT",
    "School": "Florida State",
    "Height": "6-6",
    "Weight": 348,
    "Forty": 5.99,
    "Vertical": "missing",
    "BenchReps": 16,
    "BroadJump": "missing",
    "Threecone": "missing",
    "Shuttle": "missing"
  },
  {
    "Year": 2001,
    "Player": "Elliot Silvers",
    "Pos": "OT",
    "School": "Washington",
    "Height": "6-7",
    "Weight": 348,
    "Forty": 5.43,
    "Vertical": 31.5,
    "BenchReps": 19,
    "BroadJump": 99,
    "Threecone": 7.81,
    "Shuttle": 4.66
  },
  {
    "Year": 2012,
    "Player": "Alameda Ta'amu",
    "Pos": "DT",
    "School": "Washington",
    "Height": "6-2",
    "Weight": 348,
    "Forty": 5.3,
    "Vertical": 26,
    "BenchReps": 35,
    "BroadJump": 103,
    "Threecone": "missing",
    "Shuttle": "missing"
  },
  {
    "Year": 2002,
    "Player": "Toniu Fonoti",
    "Pos": "OG",
    "School": "Nebraska",
    "Height": "6-4",
    "Weight": 349,
    "Forty": 5.49,
    "Vertical": 28.5,
    "BenchReps": 32,
    "BroadJump": 97,
    "Threecone": 8.12,
    "Shuttle": 4.81
  },
  {
    "Year": 2004,
    "Player": "Max Starks",
    "Pos": "OT",
    "School": "Florida",
    "Height": "6-7",
    "Weight": 350,
    "Forty": 5.56,
    "Vertical": 27.5,
    "BenchReps": 21,
    "BroadJump": 98,
    "Threecone": 7.88,
    "Shuttle": 4.65
  },
  {
    "Year": 2020,
    "Player": "Isaiah Wilson",
    "Pos": "OL",
    "School": "Georgia",
    "Height": "6-6",
    "Weight": 350,
    "Forty": 5.32,
    "Vertical": 29,
    "BenchReps": 26,
    "BroadJump": 110,
    "Threecone": 8.26,
    "Shuttle": 5.07
  },
  {
    "Year": 2004,
    "Player": "Ahmad Childress",
    "Pos": "DT",
    "School": "Alabama",
    "Height": "6-6",
    "Weight": 351,
    "Forty": 5.28,
    "Vertical": 22,
    "BenchReps": "missing",
    "BroadJump": 86,
    "Threecone": 8.75,
    "Shuttle": 4.94
  },
  {
    "Year": 2006,
    "Player": "Charles Spencer",
    "Pos": "OG",
    "School": "Pittsburgh",
    "Height": "6-5",
    "Weight": 352,
    "Forty": 5.25,
    "Vertical": "missing",
    "BenchReps": 30,
    "BroadJump": "missing",
    "Threecone": "missing",
    "Shuttle": "missing"
  },
  {
    "Year": 2014,
    "Player": "Daniel McCullers",
    "Pos": "DT",
    "School": "Tennessee",
    "Height": "6-7",
    "Weight": 352,
    "Forty": 5.18,
    "Vertical": 20.5,
    "BenchReps": 27,
    "BroadJump": 97,
    "Threecone": "missing",
    "Shuttle": "missing"
  },
  {
    "Year": 2015,
    "Player": "Tayo Fabuluje",
    "Pos": "OG",
    "School": "TCU",
    "Height": "6-6",
    "Weight": 353,
    "Forty": 5.55,
    "Vertical": 29.5,
    "BenchReps": "missing",
    "BroadJump": "missing",
    "Threecone": "missing",
    "Shuttle": 4.77
  },
  {
    "Year": 2017,
    "Player": "Zach Banner",
    "Pos": "OG",
    "School": "USC",
    "Height": "6-8",
    "Weight": 353,
    "Forty": 5.58,
    "Vertical": 23.5,
    "BenchReps": 22,
    "BroadJump": 92,
    "Threecone": 8.31,
    "Shuttle": 5.21
  },
  {
    "Year": 2010,
    "Player": "Terrence Cody",
    "Pos": "DT",
    "School": "Alabama",
    "Height": "6-4",
    "Weight": 354,
    "Forty": 5.71,
    "Vertical": 20.5,
    "BenchReps": "missing",
    "BroadJump": 90,
    "Threecone": 8.19,
    "Shuttle": 5.03
  },
  {
    "Year": 2002,
    "Player": "Steve Edwards",
    "Pos": "OG",
    "School": "Central Florida",
    "Height": "6-5",
    "Weight": 355,
    "Forty": 5.5,
    "Vertical": 23,
    "BenchReps": 20,
    "BroadJump": 94,
    "Threecone": 8.37,
    "Shuttle": 5.15
  },
  {
    "Year": 2006,
    "Player": "Max Jean-Gilles",
    "Pos": "OG",
    "School": "Georgia",
    "Height": "6-4",
    "Weight": 355,
    "Forty": 5.48,
    "Vertical": 24.5,
    "BenchReps": 27,
    "BroadJump": 95,
    "Threecone": 8.56,
    "Shuttle": 5.08
  },
  {
    "Year": 2015,
    "Player": "Trenton Brown",
    "Pos": "OG",
    "School": "Florida",
    "Height": "6-8",
    "Weight": 355,
    "Forty": 5.21,
    "Vertical": 23.5,
    "BenchReps": 20,
    "BroadJump": 97,
    "Threecone": 8.23,
    "Shuttle": 4.78
  },
  {
    "Year": 2003,
    "Player": "Alex Jackson",
    "Pos": "OG",
    "School": "Georgia",
    "Height": "6-4",
    "Weight": 356,
    "Forty": 5.4,
    "Vertical": "missing",
    "BenchReps": "missing",
    "BroadJump": "missing",
    "Threecone": "missing",
    "Shuttle": "missing"
  },
  {
    "Year": 2011,
    "Player": "Marcus Cannon",
    "Pos": "OT",
    "School": "TCU",
    "Height": "6-5",
    "Weight": 358,
    "Forty": 5.26,
    "Vertical": 30.5,
    "BenchReps": 33,
    "BroadJump": 105,
    "Threecone": 8.07,
    "Shuttle": 4.97
  },
  {
    "Year": 2003,
    "Player": "Kareem Marshall",
    "Pos": "OT",
    "School": "Georgia",
    "Height": "6-5",
    "Weight": 359,
    "Forty": 5.22,
    "Vertical": 27.5,
    "BenchReps": "missing",
    "BroadJump": 92,
    "Threecone": "missing",
    "Shuttle": "missing"
  },
  {
    "Year": 2000,
    "Player": "Stockar McDougle",
    "Pos": "OT",
    "School": "Oklahoma",
    "Height": "6-5",
    "Weight": 361,
    "Forty": 5.5,
    "Vertical": "missing",
    "BenchReps": 24,
    "BroadJump": "missing",
    "Threecone": "missing",
    "Shuttle": "missing"
  },
  {
    "Year": 2011,
    "Player": "Carl Johnson",
    "Pos": "OG",
    "School": "Florida",
    "Height": "6-5",
    "Weight": 361,
    "Forty": 5.4,
    "Vertical": 25.5,
    "BenchReps": 25,
    "BroadJump": 96,
    "Threecone": "missing",
    "Shuttle": 5.03
  },
  {
    "Year": 2009,
    "Player": "Herman Johnson",
    "Pos": "OG",
    "School": "LSU",
    "Height": "6-7",
    "Weight": 364,
    "Forty": 5.5,
    "Vertical": "missing",
    "BenchReps": 21,
    "BroadJump": "missing",
    "Threecone": "missing",
    "Shuttle": "missing"
  },
  {
    "Year": 2020,
    "Player": "Mekhi Becton",
    "Pos": "OL",
    "School": "Louisville",
    "Height": "6-7",
    "Weight": 364,
    "Forty": 5.1,
    "Vertical": "missing",
    "BenchReps": 23,
    "BroadJump": "missing",
    "Threecone": "missing",
    "Shuttle": "missing"
  },
  {
    "Year": 2004,
    "Player": "Shawn Andrews",
    "Pos": "OT",
    "School": "Arkansas",
    "Height": "6-4",
    "Weight": 366,
    "Forty": 5.49,
    "Vertical": 25,
    "BenchReps": 27,
    "BroadJump": 98,
    "Threecone": 8.25,
    "Shuttle": 4.85
  },
  {
    "Year": 2013,
    "Player": "T.J. Barnes",
    "Pos": "DT",
    "School": "Georgia Tech",
    "Height": "6-6",
    "Weight": 369,
    "Forty": 5.3,
    "Vertical": 22,
    "BenchReps": 25,
    "BroadJump": 97,
    "Threecone": 8.26,
    "Shuttle": 4.96
  },
  {
    "Year": 2001,
    "Player": "Leonard Davis",
    "Pos": "OT",
    "School": "Texas",
    "Height": "6-6",
    "Weight": 370,
    "Forty": 5.32,
    "Vertical": 28,
    "BenchReps": 33,
    "BroadJump": 97,
    "Threecone": 8.72,
    "Shuttle": 5.18
  },
  {
    "Year": 2002,
    "Player": "Mike Williams",
    "Pos": "OT",
    "School": "Texas",
    "Height": "6-6",
    "Weight": 375,
    "Forty": 5.3,
    "Vertical": 30,
    "BenchReps": 29,
    "BroadJump": 102,
    "Threecone": "missing",
    "Shuttle": "missing"
  }
];
    var names = name.split(" ");
    var first = names[0];
    var last = names[1];
    var firstlast = first + " " + last;
    
    var nullstring = "No matches found"; 
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
    if(printstring.length === 0){
      printstring = nullstring;
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
