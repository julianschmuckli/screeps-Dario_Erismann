var Build = {
    
    run: function(fromPos, toPos, building) {
        
        var pfad = Game.spawns.Spawn1.room.findPath(fromPos, toPos, {ignoreCreeps: true})
        for(var i in pfad) {
            Game.rooms.sim.createConstructionSite(pfad[i].x, pfad[i].y, building);
        }
        
        
    }
};
module.exports = Build;
