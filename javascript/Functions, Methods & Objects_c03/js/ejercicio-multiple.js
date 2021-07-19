
var hotel = {
    name : 'Park',
    rooms : 120,
    booked : 77,
    checkAvailability : function() {
        return this.rooms  - this.booked;
    }
};

hotel.gym = true;
hotel.pool = false;

var elName = document.getElementById('hotelName');
elName.textContent = hotel.name;

var elRooms = document.getElementById('rooms');
elRooms.textContent = hotel.checkAvailability();

var elPool = document.getElementById('pool');
elPool.className = hotel.pool;

var elGym = document.getElementById('gym');
elGym.className = hotel.gym;
