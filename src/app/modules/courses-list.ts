

export class CoursesList {
    isValid: boolean;
    data: Data[];
    error?: any;
}

export class Data {
    trainers: string[];
    _id: string;
    name: string;
    description: string;
    duration: string;
    price: number;
    active: boolean;
    createdDate: Date;
    __v: number;
}