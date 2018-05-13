export class Team {
    private logo_dir: string = '/assets/img/logo/';
    name: string;
    logo: string;
    coach: string;
    stadium: string;
    founded: number;
    cup: number;
    country: string;

    constructor(name: string, logo: string, coach: string, stadium: string, founded: number, cup: number, country: string) {
        this.name = name;
        this.logo = logo;
        this.coach = coach;
        this.stadium = stadium;
        this.founded = founded;
        this.cup = cup;
        this.country = country;
    }
    getLogoUrl() {
        let external = this.logo.substr(0, 4) == 'http';
        if (external) {
            return this.logo;
        } else {
           return this.logo_dir + this.logo; 
        }
    }
}
