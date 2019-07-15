import { Info } from './user';

export class Houses {
    address: string;
    city: string;
    desc: string;
    houseType: string;
    intersection: string;
    latitude?: string;
    longitude?: string;
    postCode: string;
    province: string;
    totalRooms: string;

    constructor(
        address: string,
        city: string,
        desc: string,
        houseType: string,
        intersection: string,
        postCode: string,
        province: string,
        totalRooms: string,
        latitude?: string,
        longitude?: string
    ) {
        this.address = address;
        this.city = city;
        this.houseType = houseType;
        this.intersection = intersection;
        this.postCode = postCode;
        this.province = province;
        this.totalRooms = totalRooms;
        this.desc = desc;
        this.latitude = latitude;
        this.longitude = longitude;
    }
}

export class HouseInfo extends Info {

    public constructor() {
        super();
    }
}
