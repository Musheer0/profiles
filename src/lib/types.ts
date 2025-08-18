export type tlink = {
    name:string,
    link:string
}
export type tbutton = {
    link:string,
    showIcon:boolean,
}

export type tprofile = {
    img:string,
    name:string,
    job_title:string
}
export type tstatus = string
export type tbio = {
    txt:string,
    img?:string,
    reverse:boolean
}
export type tgradient = {
    from:string,
    to:string,
    via:string,
    anges :  { name: "t", slug: "to top" }|
  { name: "tr", slug: "to top right" }|
  { name: "r", slug: "to right" }|
  { name: "br", slug: "to bottom right" }|
  { name: "b", slug: "to bottom" }|
  { name: "bl", slug: "to bottom left" }|
  { name: "l", slug: "to left" }|
  { name: "tl", slug: "to top left" }
}
export type tborder_sides= "t" | "r" | "b" | "l"|"m"
  export type tcolor = {
      primary:string,
      isGradient:boolean,
      gradient:tgradient|null,
      color:string
      
    }
export type TBorderSide = 
  | { name: "t"; }
  | { name: "r"; }
  | { name: "b";  }
  | { name: "l"; }
  |{name:"m"}


    export type tborder = {
      thickness: number;
      sides: TBorderSide[]|null;
      color:string
    };
    export type tprofile_card = {
    profile:tprofile,
    colors:tcolor,
    links:tlink[],
    primary_btn:tbutton,
    secondary_btn:tbutton,
    status:tstatus,
    bio:tbio,
    shadow_disabled:boolean,
    innershadow_disables:boolean,
    border?:tborder|null,
    body_color:string
}