export default {
    data() {
        return {
            name: '',
            date: '',
            location: '',
            event_query: []
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