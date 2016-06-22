var roleHarvester = require('role.harvester');
var roleUpgrader = require('role.upgrader');
var roleBuilder = require('role.builder');
var roleRepairer = require('role.repairer');
var spawner = require('spawner');
var spawnerbuilding = require('spawner.buildings');
var moneyCapa = 0;
var moneyAvai = 0;

module.exports.loop = function () {
    
    //moneytouse = Game.rooms.filter;
    for(var name in Game.rooms){
        moneyCapa = Game.rooms[name].energyCapacityAvailable;
        moneyAvai = Game.rooms[name].energyAvailable;
    }
    
    console.log('----------------------------------');
    console.log('Energie: ' + moneyAvai);
    console.log('Energie zu gebrauchen: ' + moneyCapa*0.75);
    console.log('----------------------------------');
    
    /* Löscht die Memory der Creeps*/
    for(var name in Memory.creeps) {
        if(!Game.creeps[name]) {
           delete Memory.creeps[name];
        }
    }

    
    /*AutoSpwan*/
    spawner.run(moneyCapa);
    spawnerbuilding.run();
    
    /*Tasks*/
    for(var name in Game.creeps){
        
        //Game.spawns.Spawn1.room.createConstructionSite(Game.creeps[name].pos.x,Game.creeps[name].pos.y,STRUCTURE_ROAD);
        
        var target = Game.creeps[name];
        if(target.memory.role == "harvester"){
            roleHarvester.run(target);
        }else
        if(target.memory.role == "upgrader"){
            roleUpgrader.run(target,moneyCapa,moneyAvai);
        }else
        if(target.memory.role == "builder"){
            roleBuilder.run(target,moneyCapa,moneyAvai);
        }else
        if(target.memory.role == "repairer"){
            roleRepairer.run(target);
        }
    }
}
