var roleRepairer = {

    /** @param {Creep} creep **/
    run: function(creep) {

                    if (0 == creep.carry.energy) {
                        
                        var loc = creep.room.find(FIND_STRUCTURES, {
                filter: (structure) => {
                    return (structure.structureType == STRUCTURE_EXTENSION ||
                            structure.structureType == STRUCTURE_SPAWN ||
                            structure.structureType == STRUCTURE_STORAGE ||
                            structure.structureType == STRUCTURE_CONTAINER ||
                           structure.structureType == STRUCTURE_TOWER) && structure.energy > structure.energyCapacity / 2;
                }
            });
            
                        creep.moveTo(loc[0]);
                        loc[0].transferEnergy(creep);
                        
                    } else {
                        var torepair = creep.pos.findClosestByPath(FIND_STRUCTURES, {
                            filter: function(object) {
                                if(object.hits > object.hitsMax / 2) {
                                    return false;
                                }
                                return true;
                            }
            });
            
            creep.moveTo(torepair);
            creep.repair(torepair);
                    }
                }
};

module.exports = roleRepairer;
