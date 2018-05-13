export class Player {
    private pic_dir: string = '/assets/img/pic/';
    id: number;
    pic: string;
    lastname: string;
    firstname: string;
    current_team: string;
    country: string;
    position: string;

    constructor(id: number, pic: string, lastname: string, firstname: string, current_team: string, country: string, position: string) {
        this.id = id;
        this.pic = pic;
        this.lastname = lastname;
        this.firstname = firstname;
        this.current_team = current_team;
        this.country = country;
        this.position = position;
    }
    getPicUrl() {
        let external = this.pic.substr(0, 4) == 'http';
        if (external) {
            return this.pic;
        } else {
           return this.pic_dir + this.pic; 
        }
    }
    
}
