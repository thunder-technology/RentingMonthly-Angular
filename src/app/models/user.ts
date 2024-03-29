import {HouseInfo, Houses} from './house';

export class UserInfo {
    userId: number;
    contactNumber: string;
    email: string;
    fullName: string;
    userName: string;
    userType?: number;
    photoId?: string;
    photoIdPicUri?: string;
    photoIdType?: string;
    comments?: string[];
    credentials?: string;
    _links?: Links;
    avatarUri?: string;


    public constructor(
        fullName: string,
        userName: string,
        email: string,
        contactNumber: string,
        userId: number,
        userType?: number,
        residentInfo?: string,
        photoId?: string,
        photoIdPicUri?: string,
        photoIdType?: string,
        comments?: string[],
        credentials?: string,
        _links?: Links,
        avatarUri?: string) {
        this.userId = userId;
        this.fullName = fullName;
        this.email = email;
        this.userName = userName;
        this.contactNumber = contactNumber;
        this.userType = 0;
        this.photoId = photoId;
        this.photoIdPicUri = photoIdPicUri;
        this.photoIdType = photoIdType;
        this.comments = comments;
        this.credentials = credentials;
        this._links = _links;
        this.avatarUri = avatarUri;
    }


}

export class Embedded {
    userInfoes?: UserInfo[];
    houses?: Houses[];

    public constructor() {
    }
}

export class Links {
    self: string;

    userInfo?: string;
    landlordInfo?: string;

    profile?: string;
    search?: string;

    constructor(self: string,
                userInfo?: string,
                landlordInfo?: string,
                profile?: string,
                search?: string) {
        this.self = self;
        this.userInfo = userInfo;
        this.landlordInfo = landlordInfo;
        this.profile = profile;
        this.search = search;
    }
}

export class Page {
    size: number;
    totalElements: number;
    totalPages: number;
    number: number;
}

export class Info {
    _embedded: Embedded;
    _links?: Links;
    page: Page;

    public constructor() {
        this._embedded = new Embedded();
        this._links = new Links('', '', '');
        this.page = new Page();
    }
}
