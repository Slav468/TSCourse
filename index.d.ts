declare const str = "str";
declare let userId: string;
declare let number: number;
declare let boolean: boolean;
declare const isBirthdayData: boolean;
declare const ageData: number;
declare const userNameData: string;
declare const userDataJson = "{\"isBirthdayData: boolean\":\"true\", \"ageData: number\":\"36\", \"userNameData: string\":\"John\" }";
declare const userObj: {
    isBirthdayData: boolean;
    ageData: number;
    userNameData: string;
};
declare let salary: any;
declare const currRate = "1.05";
declare const fetchCurr: (response: string) => number;
declare function transferEurToUsd(available: boolean, amount: number, commission: number): void;
declare const createError: (msg: string) => never;
declare function logBrtMsg(isBirthday: boolean, userName: string, age: number): string;
declare const test: null;
declare const test2: any;
declare const test3: undefined;
declare const test4: any;
declare const id1: symbol;
declare const id2: symbol;
declare const data: {
    [id1]: number;
    [id2]: number;
};
declare const num1: bigint;
declare const num2: bigint;
declare const userData: {
    isBirthdayData: boolean;
    ageData: number;
    userNameData: string;
    messagesData: {
        error: string;
    };
};
declare function logBrhMsg({ isBirthdayData, ageData, userNameData, messagesData: { error }, }: {
    isBirthdayData: boolean;
    ageData: number;
    userNameData: string;
    messagesData: {
        error: string;
    };
}): string;
declare const num4: number[];
declare const departments: string[];
declare const department: string;
declare const report: string[];
declare const anyData: any[];
declare const num3: number[][];
declare const dev: string;
declare const electricityUserData: {
    readings: number;
    units: string;
    mode: string;
};
declare const waterUserData: {
    readings: number;
    units: string;
};
declare const elRate: number;
declare const wRate: number;
declare const monthPayments: number[];
declare const calculatePayments: ({ readings, units, mode }: {
    readings: number;
    units: string;
    mode: string;
}, wData: {
    readings: number;
    units: string;
}, elRate: number, wRate: number) => void;
declare const sendInvoice: ([el, water]: number[], electricityUserData: {
    readings: number;
    units: string;
    mode: string;
}, waterUserData: {
    readings: number;
    units: string;
}) => string;
declare const invoice: string;
declare const userDataTuple: [boolean, number, string];
declare const userDataTuple2: [boolean, number, ...string[]];
declare const userDataTuple3: [boolean, ...number[], string];
declare const userDataTuple4: [...boolean[], number, string];
declare const message: string | number;
declare const messages: string[] | number[];
declare function printMsg(msg: string[] | number): void;
declare const printReadings: (a: number | string, b: number | boolean) => void;
declare const printReadings2: (a: number[] | string) => void;
declare function checkReadings(readings: {
    system: number;
} | {
    user: number;
}): void;
declare function logValue(x: string | Date): void;
declare let hello: 'Hello';
declare const port3000: 3000;
declare const port3001: 3001;
type ServerConfig = {
    protocol: 'http' | 'https';
    port: 3_000 | 3_001;
};
declare const serverConfig: ServerConfig;
type Role = {
    role: 'admin' | 'user';
};
type ConfigWithRole = ServerConfig & Role;
declare const backupConfig: ConfigWithRole;
type StartServer = (protocol: 'http' | 'https', port: 3_000 | 3_001) => string;
declare const startServer: StartServer;
type AnimationTimingFunc = 'ease' | 'linear' | 'ease-in' | 'ease-out';
type AnimationID = string | number;
type AnimationIterationCount = 'infinite' | number;
declare function createAnimation(id: AnimationID, animationName: string, timingFunc: AnimationTimingFunc | undefined, duration: number, iterationCount?: AnimationIterationCount): void;
interface ConfigServerInterface {
    protocol: 'http' | 'https';
    port: 3_000 | 3_001;
}
interface IConfigServerInterface {
    protocol: 'http' | 'https';
    port: 3_000 | 3_001;
    log: (msg: string) => void;
}
interface IRoleInterface {
    role: 'admin' | 'user';
}
interface IConfigWithRole extends IConfigServerInterface, IRoleInterface {
    domain: 'com' | 'ru';
}
declare const serverCOfigInterface: IConfigWithRole;
type TConfigFunc = (protocol: 'http' | 'https', port: 3_000 | 3_001, log: (msg: string) => void) => string;
declare const startServerInterface: TConfigFunc;
interface IStyles {
    [key: string]: string;
}
declare const style: IStyles;
type TEmptyNumber = 'empty' | number;
type TEmptyBool = 'empty' | boolean;
interface ClothesWarehouse {
    jackets: TEmptyNumber;
    hats: TEmptyNumber;
    socks: TEmptyNumber;
    pants: TEmptyNumber;
}
interface StationeryWarehouse {
    scissors: TEmptyNumber;
    paper: TEmptyBool;
}
interface AppliancesWarehouse {
    dishwashers: TEmptyNumber;
    cookers: TEmptyNumber;
    mixers: TEmptyNumber;
}
interface TotalWarehouse extends ClothesWarehouse, StationeryWarehouse, AppliancesWarehouse {
    deficit: boolean;
    date: Date;
}
declare const totalData: TotalWarehouse;
type TPrintReport = (data: TotalWarehouse) => string;
declare const printReport: TPrintReport;
declare let number10: number;
declare const userDataForInterface = "{\"isBirthdayData: boolean\":\"true\", \"ageData: number\":\"36\", \"userNameData: string\":\"John\" }";
interface IUserData {
    isBirthdayData: boolean;
    ageData: number;
    userNameData: string;
}
declare const userDataWithoutAny: IUserData;
declare let isOkay: boolean;
declare const isOkay2 = true;
declare let movement: boolean | string;
declare const arr: (string | number | boolean | (number | boolean)[])[];
interface PropertyModifier {
    readonly login: string;
    password: string;
    age: number;
    address?: string;
    parents?: {
        mother?: string;
        father?: string;
    };
}
declare const propertyObject: PropertyModifier;
declare let dbName: string;
declare function sendUserData(obj: PropertyModifier, dbName?: string): void;
declare const basicPorts: readonly number[];
declare const enum Direction {
    TOP = 0,
    LEFT = 1,
    RIGHT = 2,
    BOTTOM = 3
}
declare enum AnimTimingFunc {
    EASE = "ease",
    LINEAR = "linear",
    EASE_IN = "ease-in",
    EASE_OUT = "ease-out",
    EASE_IN_OUT = "ease-in-out"
}
declare enum AnimTimingFunc2 {
    EASE = 2,
    LINEAR = 3,
    EASE_IN = 4,
    EASE_OUT = 5,
    EASE_IN_OUT = 14
}
declare function frame(elem: string, dir: Direction, tFunc: AnimTimingFunc): void;
declare let some: unknown;
declare function fetchData(data: unknown): void;
declare function saveParse(s: string): unknown;
declare const dataParse: unknown;
declare function transferData(d: unknown): void;
declare const dataFromControl: {
    water: number;
    el: number;
};
declare function checkReadingsData(data: typeof dataFromControl): boolean;
declare const PI = 3.14;
declare let PIClone: typeof PI;
declare enum TypesOfMedia {
    Video = "video",
    Audio = "audio"
}
declare enum FormatsOfMedia {
    MP4 = ".mp4",
    MOV = ".mov",
    MKV = ".mkv",
    FLV = ".flv",
    WEBM = ".webM"
}
interface IMedia {
    name: string;
    type: TypesOfMedia;
    format: FormatsOfMedia;
    subtitles?: string;
    marks?: unknown;
}
declare function playMedia({ name, type, format, subtitles, marks }?: IMedia): string;
declare const fetchData2: (url: string, method: "GET" | "POST") => void;
declare const reqOptions: {
    url: string;
    method: "GET";
};
declare const num = 5;
declare const strNum: string;
declare const str2: string;
declare const bum2: number;
interface Department {
    name: string;
    budget: number;
}
declare const department2: Department;
interface Project {
    name: string;
    projectBudget: number;
}
declare function transformDept(department: Department, amount: number): Project;
declare const mainProject: Project;
declare function isNumber(n: unknown): n is number;
interface ICar {
    name: 'Car';
    engine: string;
    wheels: {
        number: number;
        type: string;
    };
}
interface IShip {
    name: 'Ship';
    engine: string;
    sail: string;
}
interface IAirplane {
    name: 'Airplane';
    engine: string;
    wings: string;
}
interface ISuperAirplane {
    name: 'Super Airplane';
    engine: string;
    wings: string;
    rocket: string;
}
type TTransportName = 'Car' | 'Ship' | 'Airplane' | 'Super Airplane';
interface ITransport {
    name: TTransportName;
    engine: string;
    wheels?: {
        number: number;
        type: string;
    };
    wings?: string;
    sail?: string;
    rocket?: string;
}
type TVehicle = ICar | IShip | IAirplane | ISuperAirplane;
declare function repair(vehicle: TVehicle): void;
declare function isCar(car: TVehicle): car is ICar;
declare function isShip(ship: TVehicle): ship is IShip;
interface ISquare {
    side: number;
    area: number;
}
interface IRect {
    a: number;
    b: number;
    area: number;
}
declare function calculateArea(side: number): ISquare;
declare function calculateArea(side: number, b: number): IRect;
type TAnimal = 'cat' | 'dog' | 'bird';
declare enum AnimalStatus {
    AVAILABLE = "available",
    NOT_AVAILABLE = "not available"
}
interface IAnimal {
    animal: TAnimal;
    breed: string;
    sterilized?: string;
    age?: number;
    location?: string;
}
interface IMessage {
    message: string;
    nextUpdateIn: Date;
}
interface IResponse {
    status: AnimalStatus.AVAILABLE;
    data: IAnimal;
}
interface IReject {
    status: AnimalStatus.NOT_AVAILABLE;
    data: IMessage;
}
type Res = IResponse | IReject;
declare function isAvailable(res: Res): res is IResponse;
declare function checkAnimalData(animal: Res): IAnimal | string;
type voidCheck = () => void;
declare const retString: voidCheck;
declare const s: void;
declare const names: string[];
declare function genericSyntax<T>(data: T): T;
declare const genericResult = 1;
declare const genericResult2 = "1";
declare const genericNum = 3;
declare const genericStr = "3";
declare const genericResult3: number;
interface IPrintES {
    design: string;
}
interface IPrintUK {
    design: number;
}
interface IPrint<T> {
    design: T;
}
declare const genericSmth: IPrint<string>;
declare const genericSmth2: IPrint<number>;
type TGeneric<T> = T;
declare const genericNum6: TGeneric<number>;
type TUser<T> = {
    login: T;
    age: number;
};
declare const genericUser: TUser<string>;
type TOrNull<Type> = Type | null;
type TOneOrMany<Type> = Type | Type[];
declare const manyType: TOneOrMany<string[]>;
interface IParent<ParentsData extends IParentOfUser> {
    parents: ParentsData;
    name: string;
    age: number;
}
interface IParentOfUser {
    mother: string;
    father: string;
}
declare const parent2: IParent<{
    mother: string;
    father: string;
    married: boolean;
}>;
declare const depositMoney: <T extends number | string>(amount: T) => T;
interface IHours {
    total: number;
    inMenu: number;
}
interface IPlayerData<Game, THours> {
    game: Game;
    hours: THours;
    server: string;
}
type TGame = string | number;
type THours = number | string | IHours;
declare const player1: IPlayerData<TGame, THours>;
declare const player2: IPlayerData<TGame, THours>;
declare const player3: IPlayerData<TGame, THours>;
declare enum FigureNames {
    RECT = "rect",
    TRIANGLE = "triangle",
    CIRCLE = "circle",
    LINE = "line"
}
interface IFigure {
    name: string;
    data?: IDataOfFigure;
}
interface IDataOfFigure {
    a?: number;
    b?: number;
    c?: number;
    r?: number;
    l?: number;
}
interface AmountOfFigures {
    squares: number;
    circles: number;
    triangles: number;
    others: number;
}
declare function calculateAmountOfFigures<T extends IFigure>(figure: T[]): AmountOfFigures;
declare const dataFigures: IFigure[];
declare class User<T, S> {
    name: T;
    age: S;
    constructor(name: T, age: S);
    sayMyName<T>(surname: T): string;
}
declare const nameStr = "Sergey";
declare const ageNum = 30;
declare const user: User<string, number>;
declare const user2: User<string, number>;
declare class AdminUser<T> extends User<string, number> {
    rules: T;
    constructor(name: string, age: number, rules: T);
}
declare const ADMIN: AdminUser<string>;
declare const arrArray: Array<string>;
declare const arrArray2: string[];
declare const roArray: ReadonlyArray<string>;
interface IState {
    data: {
        name: string;
    };
    tag: string;
}
declare const state: Partial<IState>;
declare const strictState: Required<IState>;
declare function action(state: Readonly<IState>): void;
interface ICompany {
    name: string;
    debts: number;
    open: string;
    department: IDepartment[];
    management: {
        owner: string;
    };
}
interface IDepartment {
    [key: string]: string;
}
type TCompanyKeys = keyof ICompany;
declare const keys: TCompanyKeys;
declare function printDebts<T>(company: T, name: keyof T, debts: keyof T): void;
declare const google: {
    name: string;
    open: string;
    debts: number;
    department: {
        sales: string;
        development: string;
    };
    management: {
        owner: string;
    };
};
type TGoogleKeys = keyof typeof google;
declare const keys2: TGoogleKeys;
declare let debts: 'debts';
type TCompanyDebtsType = ICompany[typeof debts];
type TCompanyOwnerType = ICompany['management']['owner'];
type TCompanyDepartmentsTypes = ICompany['department'][number];
type TTest = ICompany[keyof ICompany];
interface IPhone {
    company: string;
    number: number;
}
type TIPhoneCompanyType = IMobilePhone['company'];
interface IMobilePhone extends IPhone {
    size: string;
    companyPartner: TIPhoneCompanyType;
    manufactured: Date;
}
declare const phones: IMobilePhone[];
interface IPhonesManufacturedAfterDate extends IMobilePhone {
    initialDate: string;
}
type TIMobilePhoneKeyType = keyof IMobilePhone;
declare function filterPhonesByDate<T extends IMobilePhone>(phones: T[], key: TIMobilePhoneKeyType, initial: string): IPhonesManufacturedAfterDate[];
type TExample = 'string' extends 'Hello' ? string : number;
declare const str3 = "Hello";
type TExample2 = 'string' extends typeof str3 ? string : number;
type FromUserOrFromBase<T extends string | number> = T extends string ? IDataFromUser : IDataFromBase;
interface IUser<T extends 'created' | Date> {
    created: T extends 'created' ? 'created' : Date;
}
declare const user3: IUser<'created'>;
interface IDataFromUser {
    weights: string;
}
interface IDataFromBase {
    calories: number;
}
declare function calculateDailyCalories(str: string): IDataFromUser;
declare function calculateDailyCalories(num: number): IDataFromBase;
type GetStringType<T extends 'hello' | 'world' | string> = T extends 'hello' ? 'hello' : T extends 'world' ? 'world' : string;
type GetFirstType<T> = T extends Array<infer First> ? First : T;
type Ex = GetFirstType<number>;
type Ex2 = GetFirstType<number[]>;
type ToArray<Type> = Type extends any ? Type[] : never;
type ExArray = ToArray<Ex | string>;
type Currencies = {
    usa: 'usd';
    china?: 'cny';
    germany: 'euro';
    readonly kz: 'tenge';
    ukraine: 'uah';
};
type CreateCustomCurr<T> = {
    -readonly [Key in keyof T]+?: string;
};
type CustomCurr2 = CreateCustomCurr<Currencies>;
type Keys = 'name' | 'age' | 'email' | 'password';
type User2 = {
    [key in Keys]: string;
};
declare const alex: User2;
type MyAnimation = 'fade' | 'swipe';
type Directions = 'in' | 'out';
type MyAnimation2 = `${MyAnimation}${Capitalize<Directions>}`;
type CreateCustomCurr3<T> = {
    [Key in keyof T as `custom${Capitalize<string & Key>}`]: string;
};
type CustomCurr3 = CreateCustomCurr3<Currencies>;
type CurrWithoutKz = Omit<Currencies, 'kz'>;
type CurrUsaAndUk = Pick<Currencies, 'usa' | 'ukraine'>;
type FadeType = Exclude<MyAnimation, 'swipe'>;
type CountriesWithoutChina = Exclude<keyof Currencies, 'china'>;
type SwipeType = Extract<MyAnimation, 'swipe'>;
type PlayersName = 'alex' | 'mike';
type GameDataCurr = Record<PlayersName, CustomCurr3>;
declare const gameData: GameDataCurr;
declare function calculate(a: number, b: number): number;
type TCalculateRT = ReturnType<typeof calculate>;
type TCalculateParamType = Parameters<typeof calculate>;
type PT1 = Parameters<(a: number) => number>;
type PT2 = Parameters<(<T>(arg: T) => T)>;
declare class Example {
    constructor(a: number, b: number);
}
type T0 = ConstructorParameters<typeof Example>;
interface IFitnessClubCenter {
    clubName: string;
    location: string;
}
interface IFitnessClasses {
    name: string;
    startsAt: string;
    willStartsAt: string;
    duration: number;
}
type TFitnessClasses = Omit<IFitnessClasses, 'willStartsAt'>;
type TFitnessFutureClasses = Omit<IFitnessClasses, 'startsAt'>;
interface IFitnessClients {
    name: string;
    age: number | string;
    gender: 'male' | 'female';
    timeLeft: string;
    makeCallFor: Date;
}
type TCurrentClient = Omit<IFitnessClients, 'makeCallFor'>;
type TExClient = Omit<IFitnessClients, 'timeLeft'>;
type TFutureClients = Pick<IFitnessClients, 'name' | 'makeCallFor'>;
interface IFitnessClub {
    clubName: string;
    location: string;
    classes: TFitnessClasses[];
    futureClasses: TFitnessFutureClasses[];
    currClients: TCurrentClient[];
    exClients: TExClient[];
    futureClients: TFutureClients[];
}
declare const fitnessClubCenter: IFitnessClub;
interface ISlider {
    container?: string;
    numberOfSlides?: number;
    speed?: 300 | 500 | 700;
    direction?: 'horizontal' | 'vertical';
    dots?: boolean;
    arrows?: boolean;
    animationName?: string;
}
declare function createSlider({ container, numberOfSlides, speed, direction, dots, arrows, }?: ISlider): void;
type TCustomSliderBase = Required<Omit<ISlider, 'animationName' | 'speed'>>;
interface ICustomSlider extends TCustomSliderBase {
    speed: number;
}
declare const customSliderOptions: ICustomSlider;
declare function createCustomSlider(options: ICustomSlider): void;
interface IForm {
    login: string;
    password: string;
}
type TValidateForm<T> = {
    [key in keyof T]: {
        isValid: true;
    } | {
        isValid: false;
        errorMsg: string;
    };
};
declare const validationData: TValidateForm<IForm>;
declare const jsonTest = "{\"name\" : \"Test\", \"data\" : \"4\"}";
declare const objFromJson: any;
declare let toDoLIst: ITodo[];
interface ITodo {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}
declare class Box {
    width: number;
    height: number;
    volume: string;
    constructor(widthOrVolume: number | string, height: number);
}
declare const firstBox: Box;
declare class UserPlus {
    name: string;
}
declare const userName: UserPlus;
declare class Content {
    width: number;
    height: number;
    volume: number | undefined;
    content: string | undefined;
    _prop?: string;
    constructor(width: number, volume?: number, content?: string);
    calculateVolume(): void;
    checkContentSize(transport: number): string;
    checkContentSize(transport: number[]): string;
    get prop(): string | undefined;
    set prop(value: string | undefined);
    propAsync(value: string): Promise<void>;
}
declare const firstContent: Content;
declare const firstContentSize: Content;
declare class Styles {
    [s: string]: string | ((str: string) => boolean);
}
declare const styleNew: Styles;
declare class PresentBox extends Content {
    wrap: string;
    constructor(wrap: string, width: number, height: number);
    propAsync(value: string): Promise<void>;
}
interface IUserForm {
    login: string;
    password: string;
    token?: number;
}
interface IValidation {
    valid: boolean;
    isValid: (data: string) => boolean;
}
declare class UserForm implements IUserForm, IValidation {
    login: string;
    password: string;
    valid: boolean;
    isValid(login: string): boolean;
}
declare enum TransferStatus {
    Pending = "pending",
    Rejected = "rejected",
    Completed = "completed"
}
declare enum ErrorMessages {
    NotFound = "Not found: 404",
    NotEnoughSpace = "Not enough space: 507",
    Forbidden = "Forbidden: 403"
}
interface ITransfer {
    path: string;
    data: string[];
    date?: Date;
    start: (p: string, d: string[]) => string;
    stop: (reason: string) => string;
}
interface TransferError {
    message: ErrorMessages;
}
declare class SingleFileTransfer implements ITransfer, TransferError {
    path: string;
    data: string[];
    date?: Date;
    message: ErrorMessages;
    transferStatus: TransferStatus;
    constructor(status: TransferStatus);
    start(path: string, data: string[]): string;
    stop(reason: string): string;
    checkTransferStatus(): string;
    makeError(): string;
}
declare const transfer: SingleFileTransfer;
declare function setName(): string;
declare class Player {
    #private;
    private static game;
    name: string;
    private _password;
    server: string;
    protected consent: boolean;
    constructor(login: string);
    get password(): string;
    set password(newPass: string);
    static getGameName(): string;
    login: () => string;
    connect(): this;
    isPro(): this is CompetitivePlayer;
}
declare class CompetitivePlayer extends Player {
    ranking: number;
    checkLogin(): string;
    isConsent(): string;
}
declare const player: Player;
declare const tests: () => string;
declare const somePlayer: Player | CompetitivePlayer;
interface IEngine {
    model: string;
    capacity: number;
    startEngine: (time: Date) => string;
}
declare abstract class AbstractVehicle {
    model: string;
    capacity: number;
    abstract startEngine: (time: Date) => string;
    stopEngine: (time: Date) => string;
}
declare class Vehicles extends AbstractVehicle {
    startEngine: (time: Date) => string;
}
declare function changeDoorStatus(status: boolean): <T extends {
    new (...args: any[]): {};
}>(constructor: T) => {
    new (...args: any[]): {
        open: boolean;
    };
} & T;
//# sourceMappingURL=index.d.ts.map