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
        return this.logo_dir + this.logo;
    }
}
