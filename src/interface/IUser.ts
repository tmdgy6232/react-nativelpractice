interface iUser{
  user:{
      coid: number;
      ukey: number;
      userlevel: number;
      status: number;
      certlabemp: number;
      admituser: number;
      userid: string;
      passwd: string;
      korname: string;
      resino: string;
      serviceid: string;
      admitid: string;
      ownerYn: string;
      regdt: Date;
      uptdt: Date;
      admitdt: Date;
      company:{
        coid: number;
        status: number;
        admituser: number;
        servicetype: number;
        limitusercnt: number;
        demoyn: number;
        bcoyn: number;
        conm: string;
        bizrgno: string;
        agencyid: string;
        serviceid: string;
        admitid: string;
        svcstdt: Date;
        svceddt: Date;
        regdt : Date;
        uptdt: Date;
        admitdt: Date;
      }
      isKms: boolean;
      isMobilePhone: boolean;
      isCommuteEmployee: boolean;
      syncType: string;
      byMember : number;
      grpid: number;
      serviceType: string;
      comserviceEnddt: string;
      currentdt: string;
      demoyn: string;
      ipmaxcnt: number
  }

}

export default iUser;