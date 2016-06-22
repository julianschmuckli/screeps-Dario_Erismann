var roleHarvester = {
    run: function(creep){
       if(creep.carryCapacity > creep.carry.energy){

            var loc = Game.spawns.Spawn1.room.find(FIND_SOURCES);
            if(creep.harvest(loc[creep.memory.source] ,RESOURCE_ENERGY)==ERR_NOT_IN_RANGE){
                creep.moveTo(loc[creep.memory.source]);
            }
        }else{
             var loc = creep.room.find(FIND_STRUCTURES, {
                filter: (structure) => {
                    return (structure.structureType == STRUCTURE_EXTENSION ||
                            structure.structureType == STRUCTURE_SPAWN ||
                            structure.structureType == STRUCTURE_STORAGE ||
                            structure.structureType == STRUCTURE_CONTAINER ||
                            structure.structureType == STRUCTURE_TOWER) && structure.energy < structure.energyCapacity;
                }
            });

            if(creep.transfer(loc[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                creep.moveTo(loc[0]);
            }
                
        } 
    }
};

module.exports = roleHarvester;
