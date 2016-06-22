var roleUpgrader = {
    run: function(creep,moneyCapa,moneyAvai){
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
    }
};

module.exports = roleUpgrader;
