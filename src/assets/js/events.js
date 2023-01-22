import Event from "../components/Event.vue";

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
    mounted: function() {
        let url = "http://puigmal.salle.url.edu/api/v2/events";

        console.log(url);
        this.event_query = []

        fetch(url, {
            method: 'GET',
            headers: {
                "Authorization": "Bearer " + "eyJhbGciOiJIUzI1NiJ9.eyJpZCI6MjM4NSwibmFtZSI6Ik9raGFpQnJvaCIsImxhc3RfbmFtZSI6Ik5vbmUiLCJlbWFpbCI6ImFybmF1QGdtYWlsLmNvbSIsImltYWdlIjoiaHR0cHM6Ly9jZG4ucGl4YWJheS5jb20vcGhvdG8vMjAxNS8xMC8wNS8yMi8zNy9ibGFuay1wcm9maWxlLXBpY3R1cmUtOTczNDYwXzk2MF83MjAucG5nIn0.f47aywurpTVpWb6QmpLJoWY3UsLyZy0T-c3OqMO7FTQ"
            }
        })
        .then(response => response.json())
        .then(data => 
            data.forEach(event => {
                this.event_query.push({id: event.id, name: event.name, image: event.image, location: event.location, date: event.date.substring(0,10).replaceAll("-","/")})
            })
        )
        .catch(error => console.error(error))
    },
    methods: {
        search (url) {
            console.log(url)
            this.event_query = []

            fetch(url, {
                method: 'GET',
                headers: {
                    "Authorization": "Bearer " + "eyJhbGciOiJIUzI1NiJ9.eyJpZCI6MjM4NSwibmFtZSI6Ik9raGFpQnJvaCIsImxhc3RfbmFtZSI6Ik5vbmUiLCJlbWFpbCI6ImFybmF1QGdtYWlsLmNvbSIsImltYWdlIjoiaHR0cHM6Ly9jZG4ucGl4YWJheS5jb20vcGhvdG8vMjAxNS8xMC8wNS8yMi8zNy9ibGFuay1wcm9maWxlLXBpY3R1cmUtOTczNDYwXzk2MF83MjAucG5nIn0.f47aywurpTVpWb6QmpLJoWY3UsLyZy0T-c3OqMO7FTQ"
                }
            })
            .then(response => response.json())
            .then(data => 
                data.forEach(event => {
                    this.event_query.push({id: event.id, name: event.name, image: event.image, location: event.location, date: event.date.substring(0,10).replaceAll("-","/")})
                })
            )
            .catch(error => console.error(error))
        }
    }
}
