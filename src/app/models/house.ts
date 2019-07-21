import { Info } from './user';
import {ɵBrowserAnimationBuilder} from '@angular/platform-browser/animations';

export class Houses {
    address: string;
    city: string;
    desc: string;
    houseType: string;
    intersection: string;
    postCode: string;
    province: string;
    emptyRooms: string;
    totalRooms: string;
    houseId?: number;
    latitude?: string;
    longitude?: string;
    houseExtraInfo?: HouseExtraInfo;

    constructor(
        address?: string,
        city?: string,
        desc?: string,
        houseType?: string,
        intersection?: string,
        postCode?: string,
        province?: string,
        totalRooms?: string,
        houseId?: number,
        latitude?: string,
        longitude?: string,
        houseExtraInfo?: HouseExtraInfo
    ) {
        this.address = address;
        this.city = city;
        this.houseType = houseType;
        this.intersection = intersection;
        this.postCode = postCode;
        this.province = province;
        this.totalRooms = totalRooms;
        this.desc = desc;
        this.houseId = houseId;
        this.latitude = latitude;
        this.longitude = longitude;
        this.houseExtraInfo = houseExtraInfo;
    }
}

export class HouseExtraInfo {
    houseId: number;
    hasAirCondition = '0';
    hasGym = '0';
    hasKitchen = '0';
    hasLaundry = '0';
    hasSwimmingpool = '0';
    hasTv = '0';
    hasWifi = '0';
    isNearSubway = '0';
    parkingNum = '0';

    constructor(hasAirCondition: string,
                hasGym: string,
                hasKitchen: string,
                hasLaundry: string,
                hasSwimmingpool: string,
                hasTv: string,
                hasWifi: string,
                isNearSubway: string,
                parkingNum: string,
                houseId?: number
                ) {
        this.houseId = houseId;
        this.hasAirCondition = hasAirCondition;
        this.hasGym = hasGym;
        this.hasKitchen = hasKitchen;
        this.hasLaundry = hasLaundry;
        this.hasSwimmingpool = hasSwimmingpool;
        this.hasTv = hasTv;
        this.hasWifi = hasWifi;
        this.isNearSubway = isNearSubway;
        this.parkingNum = parkingNum;
    }
}

export class HouseInfo extends Info {

    public constructor() {
        super();
    }
}
