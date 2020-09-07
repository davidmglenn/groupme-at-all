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

  beefSearch1(firstlast){
    var beefJson = [];
    var beefEntry;
    var beefEntryName;
    var stringchunk = "";
    var i;
    for (i = 0; i < beefJson.length; i++) {
      beefEntry = beefJson[i];
      beefEntryName = beefEntry.Player;
      if(beefEntryName == firstlast){
        stringchunk += firstlast;
        stringchunk += " ";
        stringchunk += beefEntry.Year;
        stringchunk += " ";
        stringchunk += beefEntry.Pos;
        stringchunk += " from ";
        stringchunk += beefEntry.School;
        stringchunk += ".";
        stringchunk += " Height: ";
        stringchunk += beefEntry.Height;
        stringchunk += " Weight: ";
        stringchunk += beefEntry.Weight;
        stringchunk += " 40 yard dash: ";
        stringchunk += beefEntry.Forty;
        stringchunk += " Vertical: ";
        stringchunk += beefEntry.Vertical;
        stringchunk += " Bench Reps: ";
        stringchunk += beefEntry.BenchReps;
        stringchunk += " Broad Jump: ";
        stringchunk += beefEntry.BroadJump;
        stringchunk += " Three Cone: ";
        stringchunk += beefEntry.Threecone;
        stringchunk += " Shuttle: ";
        stringchunk += beefEntry.Shuttle;
      }
    }
    return stringchunk;
  }

  beefSearch2(firstlast){
    var beefJson = [];
    var beefEntry;
    var beefEntryName;
    var stringchunk = "";
    var i;
    for (i = 0; i < beefJson.length; i++) {
      beefEntry = beefJson[i];
      beefEntryName = beefEntry.Player;
      if(beefEntryName == firstlast){
        stringchunk += firstlast;
        stringchunk += " ";
        stringchunk += beefEntry.Year;
        stringchunk += " ";
        stringchunk += beefEntry.Pos;
        stringchunk += " from ";
        stringchunk += beefEntry.School;
        stringchunk += ".";
        stringchunk += " Height: ";
        stringchunk += beefEntry.Height;
        stringchunk += " Weight: ";
        stringchunk += beefEntry.Weight;
        stringchunk += " 40 yard dash: ";
        stringchunk += beefEntry.Forty;
        stringchunk += " Vertical: ";
        stringchunk += beefEntry.Vertical;
        stringchunk += " Bench Reps: ";
        stringchunk += beefEntry.BenchReps;
        stringchunk += " Broad Jump: ";
        stringchunk += beefEntry.BroadJump;
        stringchunk += " Three Cone: ";
        stringchunk += beefEntry.Threecone;
        stringchunk += " Shuttle: ";
        stringchunk += beefEntry.Shuttle;
      }
    }
    return stringchunk;
  }

  beefSearch3(firstlast){
    var beefJson = [];
    var beefEntry;
    var beefEntryName;
    var stringchunk = "";
    var i;
    for (i = 0; i < beefJson.length; i++) {
      beefEntry = beefJson[i];
      beefEntryName = beefEntry.Player;
      if(beefEntryName == firstlast){
        stringchunk += firstlast;
        stringchunk += " ";
        stringchunk += beefEntry.Year;
        stringchunk += " ";
        stringchunk += beefEntry.Pos;
        stringchunk += " from ";
        stringchunk += beefEntry.School;
        stringchunk += ".";
        stringchunk += " Height: ";
        stringchunk += beefEntry.Height;
        stringchunk += " Weight: ";
        stringchunk += beefEntry.Weight;
        stringchunk += " 40 yard dash: ";
        stringchunk += beefEntry.Forty;
        stringchunk += " Vertical: ";
        stringchunk += beefEntry.Vertical;
        stringchunk += " Bench Reps: ";
        stringchunk += beefEntry.BenchReps;
        stringchunk += " Broad Jump: ";
        stringchunk += beefEntry.BroadJump;
        stringchunk += " Three Cone: ";
        stringchunk += beefEntry.Threecone;
        stringchunk += " Shuttle: ";
        stringchunk += beefEntry.Shuttle;
      }
    }
    return stringchunk;
  }

  beefSearch4(firstlast){
    var beefJson = [];
    var beefEntry;
    var beefEntryName;
    var stringchunk = "";
    var i;
    for (i = 0; i < beefJson.length; i++) {
      beefEntry = beefJson[i];
      beefEntryName = beefEntry.Player;
      if(beefEntryName == firstlast){
        stringchunk += firstlast;
        stringchunk += " ";
        stringchunk += beefEntry.Year;
        stringchunk += " ";
        stringchunk += beefEntry.Pos;
        stringchunk += " from ";
        stringchunk += beefEntry.School;
        stringchunk += ".";
        stringchunk += " Height: ";
        stringchunk += beefEntry.Height;
        stringchunk += " Weight: ";
        stringchunk += beefEntry.Weight;
        stringchunk += " 40 yard dash: ";
        stringchunk += beefEntry.Forty;
        stringchunk += " Vertical: ";
        stringchunk += beefEntry.Vertical;
        stringchunk += " Bench Reps: ";
        stringchunk += beefEntry.BenchReps;
        stringchunk += " Broad Jump: ";
        stringchunk += beefEntry.BroadJump;
        stringchunk += " Three Cone: ";
        stringchunk += beefEntry.Threecone;
        stringchunk += " Shuttle: ";
        stringchunk += beefEntry.Shuttle;
      }
    }
    return stringchunk;
  }

  beefResponse(res, name){
    
    var names = name.split(" ");
    var first = names[0];
    var last = names[1];
    var firstlast = first + " " + last;
    
    var nullstring = "No matches found"; 
    var printstring = "";
    printstring += beefSearch1(firstlast);
    printstring += beefSearch2(firstlast);
    printstring += beefSearch3(firstlast);
    printstring += beefSearch4(firstlast);
     
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
