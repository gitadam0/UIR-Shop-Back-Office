import {BaseDto} from "./BaseDto.model";

export class ClientDto extends BaseDto {
    public firstName!: string;
    public lastName!: string;
    public email!: string;
    public phoneNumber!: string;

}
