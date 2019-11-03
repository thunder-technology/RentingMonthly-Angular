import {Embedded, Info, Links, Page} from './user';

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
    rooms?: object[];
    houseId: number;
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
        houseExtraInfo?: HouseExtraInfo,
        emptyRooms?: string,
        rooms?: object[]
    ) {
        this.address = address || '-';
        this.city = city || '-';
        this.houseType = houseType || '-';
        this.intersection = intersection || '-';
        this.postCode = postCode || '-';
        this.province = province || '-';
        this.emptyRooms = emptyRooms || '-';
        this.totalRooms = totalRooms || '-';
        this.desc = desc || '-';
        this.houseId = houseId || -1;
        this.latitude = latitude || '-';
        this.longitude = longitude || '-';
        this.houseExtraInfo = houseExtraInfo || new HouseExtraInfo(
            '0',
            '0',
            '0',
            '0',
            '0',
            '0',
            '0',
            '0',
            '0',
        );
        this.rooms = rooms;
    }
}

export class HouseExtraInfo {
    houseId: number;
    hasAirCondition: string;
    hasGym: string;
    hasKitchen: string;
    hasLaundry: string;
    hasSwimmingpool: string;
    hasTv: string;
    hasWifi: string;
    isNearSubway: string;
    parkingNum: string;

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
        this.houseId = houseId || -1;
        this.hasAirCondition = hasAirCondition || '0';
        this.hasGym = hasGym || '0';
        this.hasKitchen = hasKitchen || '0';
        this.hasLaundry = hasLaundry || '0';
        this.hasSwimmingpool = hasSwimmingpool || '0';
        this.hasTv = hasTv || '0';
        this.hasWifi = hasWifi || '0';
        this.isNearSubway = isNearSubway || '0';
        this.parkingNum = parkingNum || '0';
    }
}

export class HouseInfo implements Info {
    _embedded: Embedded;
    page: Page;
    _links: Links;
}

export class Constants {
    static headers = ['Landlord id', 'User Name', 'Full Name', 'Email', 'Contact Number', 'Residential Info', 'SIN'];
    static r_headers = ['Resident id', 'User Name', 'Full Name', 'Contact Number', 'Email',
        'AvatarUri', 'BankingRunoverUri', 'CreditCard Number', 'CreditCard Type'];
}


