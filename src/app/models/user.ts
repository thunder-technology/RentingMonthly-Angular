import {HouseExtraInfo, Houses} from './house';

export class LandlordInfo {
    userId: number;
    contactNumber: string;
    email: string;
    fullName: string;
    userName: string;
    residentalAddress: string;
    sin: string;
    comments?: string[];
    avatarUri?: string;
    photoId?: string;
    photoIdPicUri?: string;
    photoIdType?: number;

    public constructor(
        contactNumber: string,
        email: string,
        fullName: string,
        userName: string,
        userType: number,
        residentalAddress: string,
        sin: string,
        userId?: number,
        comments?: string,
        avatarUri?: string,
        photoId?: string,
        photoIdPicUri?: string,
        photoIdType?: number
    ) {
        this.contactNumber = contactNumber;
        this.email = email;
        this.fullName = fullName;
        this.userName = userName;
        this.residentalAddress = residentalAddress;
        this.sin = sin;
        this.userId = userId;
        this.comments.fill(comments);
        this.avatarUri = avatarUri;
        this.photoId = photoId;
        this.photoIdPicUri = photoIdPicUri;
        this.photoIdType = photoIdType;
    }
}

export class ResidentInfo {
    userId: number;
    bankingRunoverUri: string;
    creditCardNo: string;
    creditCardType: string;
    email: string;
    userName: string;
    fullName: string;
    contactNumber: string;
    avatarUri: string;
    photoId: string;
    photoIdPicUri: string;
    photoIdType: string;
    rents: Object;

    constructor(
        userName: string,
        fullName: string,
        contactNumber: string,
        email: string,
        avatarUri: string,
        rents?: Object,
        userId?: number,
        bankingRunoverUri?: string,
        creditCardNo?: string,
        creditCardType?: string,
        photoId?: string,
        photoIdPicUri?: string,
        photoIdType?: string
    ) {
        this.userName = userName || '-';
        this.fullName = fullName || '-';
        this.contactNumber = contactNumber || '-';
        this.email = email || '-';
        this.rents = rents;
        this.avatarUri = avatarUri || '-';
        this.userId = userId;
        this.bankingRunoverUri = bankingRunoverUri || '-';
        this.creditCardNo = creditCardNo || '-';
        this.creditCardType = creditCardType || '-';
        this.photoId = photoId || '-';
        this.photoIdPicUri = photoIdPicUri || '-';
        this.photoIdType = photoIdType || '-';
    }
}

export interface Embedded {
    residentInfoes?: ResidentInfo[];
    houses?: Houses[];
    houseExtraInfoes?: HouseExtraInfo[];
    landlordInfoes?: LandlordInfo[];
}

export interface Links {
    self: string;
    userInfo?: string;
    landlordInfo?: string;
    profile?: string;
    search?: string;

}

export interface Page {
    size: number;
    totalElements: number;
    totalPages: number;
    number: number;
}

export interface Info {
    _embedded: Embedded;
    _links: Links;
    page: Page;
}
