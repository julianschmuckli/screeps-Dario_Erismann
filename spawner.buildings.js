var builder = require('builder');

var spawner = {
        run: function() {
            if(Game.spawns.Spawn1.memory.buildingtime+1<Game.time||Game.spawns.Spawn1.memory.buildingtime==undefined){
                var pos = Game.spawns.Spawn1.room.findPath(Game.spawns.Spawn1.pos, Game.rooms.sim.controller.pos,{ignoreCreeps: true, ignoreRoads: true});
                for(var a in pos){
                    Game.spawns.Spawn1.room.createConstructionSite(pos[a].x,pos[a].y,STRUCTURE_ROAD);
                }
                var pos = Game.spawns.Spawn1.room.findPath(Game.spawns.Spawn1.pos, Game.spawns.Spawn1.room.find(FIND_SOURCES)[0].pos,{ignoreCreeps: true, ignoreRoads: true});
                for(var a in pos){
                    Game.spawns.Spawn1.room.createConstructionSite(pos[a].x,pos[a].y,STRUCTURE_ROAD);
               }
                var pos = Game.spawns.Spawn1.room.findPath(Game.spawns.Spawn1.pos, Game.spawns.Spawn1.room.find(FIND_SOURCES)[1].pos,{ignoreCreeps: true, ignoreRoads: true});
                for(var a in pos){
                    Game.spawns.Spawn1.room.createConstructionSite(pos[a].x,pos[a].y,STRUCTURE_ROAD);
                }
                
                var spawn = Game.spawns.Spawn1;
                var spawnplus = Game.rooms.sim.getPositionAt(spawn.pos.x+5,spawn.pos.y);
                builder.run(spawn.pos,spawnplus,STRUCTURE_EXTENSION);
                
                Game.spawns.Spawn1.memory.buildingtime = Game.time;
            }
            
        }
}; 

module.exports = spawner;
