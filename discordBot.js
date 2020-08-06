// to make sure webserver works correctly
process.chdir("2bored2wait/")

// reqs
var http = require("http");
var queuing = require('./2bored2wait/main.js');
var auth = require('./auth.json');
var Discord = require('discord.js');
var D = new Date();
var Started = "no";



global.queueData = "";


function update() {
    http.get("http://localhost/update", (resp) => {
        let data = '';
        resp.on('data', (chunk) => {
            data += chunk;
        });
        resp.on("end", () => {
            queueData = JSON.parse(data);
            console.log(`Recieved data: ${queueData.place}`)
            if (queueData.place === "None" || queueData.place === "undefined") {
                queueData = "Please allow a moment for the data to update"
            }
        });
    }).on("error", (err) => {
        queueData = "error"
    });
    setTimeout(update, 5 * 1000);
    setTimeout(timedDiscordUpdate, 30 * 1000);
}

function setDiscordActivity(string) {
    client.user.setActivity(string, {
            type: ""
        })
        .then(presence => console.log(`Activity set to ${presence.game ? presence.game.name : 'none'}`))
        .catch(console.error);
}

function timedDiscordUpdate() {
    setDiscordActivity("Queue Position: " + queueData.place)
}
// Configure logger settings

var client = new Discord.Client()

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`)
    setDiscordActivity("Not queueing.")
})


client.on('ready', () => {
	var channel = client.channels.find(channel => channel.id === '   ');//put channel id here
	console.log("we in bois");
		setInterval(() => {
			if (Started === "yes"){
				channel.send({
					embed: {
						color: 3447003,
						author: {
							name: client.user.username,
							icon_url: client.user.avatarURL
						},
						title: "2b2t Queue =/",
						//url: "http://google.com",
						description: "Start and stop the queue from discord!",
						fields: [{
								name: "Position",
								value: `You are in position **${queueData.place}**.`
							},
							{
								name: "ETA",
								value: `Estimated time until login: **${queueData.ETA}**`
							}
						],
						timestamp: new Date(),
						footer: {
							icon_url: client.user.avatarURL,
							text: "Author: Surprisejedi"
						}
					}
				})
			}
		}, 10000)	
});
	
client.on('ready', () => {
	var channel = client.channels.find(channel => channel.id === '   ');//put channel id here
	console.log("we in bois2");
		setInterval(() => {
			if (queueData.place === "50"){
				channel.send("@everyone");
				channel.send({
					embed: {
						color: 3447003,
						author: {
							name: client.user.username,
							icon_url: client.user.avatarURL
						},
						title: "2b2t Queue =/",
						//url: "http://google.com",
						description: "Start and stop the queue from discord!",
						fields: [{
								name: "Position",
								value: `You are in position **${queueData.place}**.
										Get Ready`
							},
							{
								name: "ETA",
								value: `Estimated time until login: **${queueData.ETA}**`
							}
						],
						timestamp: new Date(),
						footer: {
							icon_url: client.user.avatarURL,
							text: "Author: Surprisejedi"
						}
					}
				})
			}
		}, 10000)	
});

client.on('ready', () => {
	var channel = client.channels.find(channel => channel.id === '   ');//put channel id here
	console.log("we in bois2");
		setInterval(() => {
			if (queueData.place === "25"){
				channel.send("@everyone");
				channel.send({
					embed: {
						color: 3447003,
						author: {
							name: client.user.username,
							icon_url: client.user.avatarURL
						},
						title: "2b2t Queue =/",
						//url: "http://google.com",
						description: "Start and stop the queue from discord!",
						fields: [{
								name: "Position",
								value: `You are in position **${queueData.place}**.
										Get Ready`
							},
							{
								name: "ETA",
								value: `Estimated time until login: **${queueData.ETA}**`
							}
						],
						timestamp: new Date(),
						footer: {
							icon_url: client.user.avatarURL,
							text: "Author: Surprisejedi"
						}
					}
				})
			}
		}, 10000)	
});

client.on('ready', () => {
	var channel = client.channels.find(channel => channel.id === '   ');//put channel id here
	console.log("we in bois2");
		setInterval(() => {
			if (queueData.place === "10"){
				channel.send("@everyone");
				channel.send({
					embed: {
						color: 3447003,
						author: {
							name: client.user.username,
							icon_url: client.user.avatarURL
						},
						title: "2b2t Queue =/",
						//url: "http://google.com",
						description: "Start and stop the queue from discord!",
						fields: [{
								name: "Position",
								value: `You are in position **${queueData.place}**.
										Get Ready`
							},
							{
								name: "ETA",
								value: `Estimated time until login: **${queueData.ETA}**`
							}
						],
						timestamp: new Date(),
						footer: {
							icon_url: client.user.avatarURL,
							text: "Author: Surprisejedi"
						}
					}
				})
			}
		}, 10000)	
});

client.on('ready', () => {
	var channel = client.channels.find(channel => channel.id === '  ');//put channel id here
	console.log("we in bois2");
		setInterval(() => {
			if (queueData.place === "1"){
				channel.send("@everyone");
				channel.send({
					embed: {
						color: 3447003,
						author: {
							name: client.user.username,
							icon_url: client.user.avatarURL
						},
						title: "2b2t Queue =/",
						//url: "http://google.com",
						description: "Start and stop the queue from discord!",
						fields: [{
								name: "Position",
								value: `You are in position **${queueData.place}**.
										Get Ready`
							},
							{
								name: "ETA",
								value: `Estimated time until login: **${queueData.ETA}**`
							}
						],
						timestamp: new Date(),
						footer: {
							icon_url: client.user.avatarURL,
							text: "Author: Surprisejedi"
						}
					}
				})
			}
		}, 5000)	
});

client.on('message', msg => {

    if (msg.content === 'update') {
        msg.channel.send({
            embed: {
                color: 3447003,
                author: {
                    name: client.user.username,
                    icon_url: client.user.avatarURL
                },
                title: "2b2t Queue =/",
                //url: "http://google.com",
                description: "Start and stop the queue from discord!",
                fields: [{
                        name: "Position",
                        value: `You are in position **${queueData.place}**.`
                    },
                    {
                        name: "ETA",
                        value: `Estimated time until login: **${queueData.ETA}**`
                    }
                ],
                timestamp: new Date(),
                footer: {
                    icon_url: client.user.avatarURL,
                    text: "Author: Surprisejedi"
                }
            }
        });
    }
    if (msg.content === "start") {
		Started = "yes";
		console.log(Started);
        var td = D.toLocaleTimeString();
        http.get("http://localhost/start")
        msg.channel.send({
            embed: {
                color: 3447003,
                author: {
                    name: client.user.username,
                    icon_url: client.user.avatarURL
                },
                fields: [{
                        name: "Queue",
                        value: `Queue is starting up. Allow 15 seconds to update.`
                    },
                    {
                        name: "Time Started",
                        value: `Started at ` + td 
					}
                ],
                timestamp: new Date(),
                footer: {
                    icon_url: client.user.avatarURL,
                    text: "Author: Surprisejedi"
                }
            }
        });
        setDiscordActivity("Starting queue.")
        setTimeout(update, 5 * 1000);
    }
    if (msg.content === "stop") {
		Started = "no";
		console.log(Started);
        http.get("http://localhost/stop")
        setDiscordActivity("Not queueing.")
        msg.channel.send({
            embed: {
                color: 3447003,
                author: {
                    name: client.user.username,
                    icon_url: client.user.avatarURL
                },
                fields: [{
                        name: "Queue",
                        value: `Queue is **stopped**.`
                    }
                ],
                timestamp: new Date(),
                footer: {
                    icon_url: client.user.avatarURL,
                    text: "Author: Surprisejedi"
                }
            }
        });
    }
})

client.login(auth.token)
