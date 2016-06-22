var roleUpgrader = require('role.upgrader');

var roleBuilder = {
    run: function(creep,moneyCapa,moneyAvai){
        if(Game.rooms.sim.controller.level<2){
            //Uprager Aufgabe
            if(0 != creep.carry.energy){
                var toupgrade = creep.room.find(FIND_MY_STRUCTURES);
                if(creep.upgradeController(toupgrade[0])==ERR_NOT_IN_RANGE){
                    creep.moveTo(toupgrade[0]);
                }
            }else{
    
    
                
                var loc = creep.room.find(FIND_STRUCTURES, {
                        filter: (structure) => {
                            return (structure.structureType == STRUCTURE_EXTENSION || structure.structureType == STRUCTURE_SPAWN);
                        }});
                        
                if(moneyCapa*0.75<moneyAvai){    
                    if(loc[0].transferEnergy(creep)==ERR_NOT_IN_RANGE){
                        creep.moveTo(loc[0])
                    }
                }
                
                
            }
        }else{
            if(creep.carry.energy > 0){
                var tobuild;
                if(creep.memory.type == 'roads'){
                
                    tobuild = creep.room.find(FIND_CONSTRUCTION_SITES, {
                        filter: (structure) => {
                            return (STRUCTURE_ROAD);
                        }
                    });
                    if(tobuild.length == 0){
                        tobuild = creep.room.find(FIND_CONSTRUCTION_SITES, {
                        filter: (structure) => {
                            return (structure.structureType == STRUCTURE_EXTENSION);
                        }
                    });
                    }
                }else if(creep.memory.type == 'energy'){
                    tobuild = creep.room.find(FIND_CONSTRUCTION_SITES, {
                        filter: (structure) => {
                            return (structure.structureType == STRUCTURE_EXTENSION);
                        }
                    });
                    if(tobuild.length == 0){
                        tobuild = creep.room.find(FIND_CONSTRUCTION_SITES, {
                        filter: (structure) => {
                            return (STRUCTURE_ROAD);
                        }
                        });
                    }
                    
                }
                
                if(creep.build(tobuild[0])==ERR_NOT_IN_RANGE){
                    creep.moveTo(tobuild[0]);
                }
            }else{
                var loc = creep.room.find(FIND_STRUCTURES, {
                    filter: (structure) => {
                        return (structure.structureType == STRUCTURE_EXTENSION || structure.structureType == STRUCTURE_SPAWN);
                }});
                
    
                if(moneyCapa*0.75<moneyAvai){
                    if(loc.length>0){
                        if(loc[0].transferEnergy(creep)==ERR_NOT_IN_RANGE){
                            creep.moveTo(loc[0]);
                        }
                    }
                }
            }
        }
    }
};

module.exports = roleBuilder;
