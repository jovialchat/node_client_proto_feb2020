export class TimeStamp {
    private sender_sent_time: number|null = null
    add_sender_sent_time(time: number|string){
        if(this.sender_sent_time !== null) throw Error("A Timestamp can not be resigned")
        this.sender_sent_time = Number(time)
    }
    private server_sent_time: number|null = null
    add_server_sent_time(time: number|string){
        if(this.server_sent_time !== null) throw Error("A Timestamp can not be resigned")
        this.server_sent_time = Number(time)
    }
    private reciver_recive_time: number|null = null
    add_reciver_recive_time(time: number|string){
        if(this.reciver_recive_time !== null) throw Error("A Timestamp can not be resigned")
        this.reciver_recive_time = Number(time)
    }
    private server_recive_time: number|null = null
    add_server_recive_time(time: number|string){
        if(this.server_recive_time !== null) throw Error("A Timestamp can not be resigned")
        this.server_recive_time = Number(time)
    }
    constructor(
        {sender_sent_time, server_sent_time, reciver_recive_time, server_recive_time}:
        {sender_sent_time?: number|null, server_sent_time?: number|null, reciver_recive_time?: number|null, server_recive_time?: number|null}
    ){
        if(sender_sent_time) this.add_sender_sent_time(sender_sent_time)
        if(server_sent_time) this.add_server_sent_time(server_sent_time)
        if(reciver_recive_time) this.add_reciver_recive_time(reciver_recive_time)
        if(server_recive_time) this.add_server_recive_time(server_recive_time)
    }
    toObject(){
        return{
            sender_sent_time: this.sender_sent_time,
            server_sent_time: this.server_sent_time,
            reciver_recive_time: this.reciver_recive_time,
            server_recive_time: this.server_recive_time
        }
    }
}