import Event from "../components/Event.vue";

export default {
    data() {
        return {
            name: '',
            date: '',
            location: '',
            event_query: [
                {id: 1, name: "La fiestita", location: "Barcelona", date: "21/01/2023"},
                {id: 2, name: "La fiestita", location: "Barcelona", date: "21/01/2023"},
                {id: 3, name: "La fiestita", location: "Barcelona", date: "21/01/2023"},
                {id: 4, name: "La fiestita", location: "Barcelona", date: "21/01/2023"},
                {id: 5, name: "La fiestita", location: "Barcelona", date: "21/01/2023"},
                {id: 6, name: "La fiestita", location: "Barcelona", date: "21/01/2023"},
                {id: 7, name: "La fiestita", location: "Barcelona", date: "21/01/2023"},
                {id: 8, name: "La fiestita", location: "Barcelona", date: "21/01/2023"},
                {id: 9, name: "La fiestita", location: "Barcelona", date: "21/01/2023"}
            ]
        }
    },
    components: {
        Event
    },
    methods: {
        search () {
            let url = "http://puigmal.salle.url.edu/api/v2/events";
           
            if (this.location != "" || this.name != "" || this.date != "") {
                url = url + "/search?";
                if (this.location != "") url = url + "location=" + this.location + "&";
                if (this.name != "") url = url + "keyword=" + this.name + "&";
                if (this.date != "") url = url + "date=" + this.date + "&"; 
            }
            url = url.slice(0, -1);

            console.log(url);

            fetch(url, {
                method: 'GET',
                headers: {
                    "Authorization": "Bearer " + "eyJhbGciOiJIUzI1NiJ9.eyJpZCI6MjM4NSwibmFtZSI6Ik9raGFpQnJvaCIsImxhc3RfbmFtZSI6Ik5vbmUiLCJlbWFpbCI6ImFybmF1QGdtYWlsLmNvbSIsImltYWdlIjoiaHR0cHM6Ly9jZG4ucGl4YWJheS5jb20vcGhvdG8vMjAxNS8xMC8wNS8yMi8zNy9ibGFuay1wcm9maWxlLXBpY3R1cmUtOTczNDYwXzk2MF83MjAucG5nIn0.f47aywurpTVpWb6QmpLJoWY3UsLyZy0T-c3OqMO7FTQ"
                }
            })
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(error => console.error(error))
        }
    }
}