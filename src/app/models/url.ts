export class Url {
    static url = 'http://rentingmonthlydev-env.ca-central-1.elasticbeanstalk.com';
    static urlUser = Url.url + '/users' as string;
    static urlLandLord = Url.url  + '/landlords' as string;
    static urlResidents = Url.url + '/residents' as string;

    static urlLandLordById(id: number): string {
        return Url.urlLandLord + '/' + id;
    }

    static urlResidentsById(id: number): string {
        return Url.urlResidents + '/' + id;
    }

    static urlUserById(id: number): string {
        return Url.urlUser + '/' + id;
    }

}

