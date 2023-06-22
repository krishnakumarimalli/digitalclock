function digiclk()
{
    var date=new Date();
    var hh=date.getHours();
    var mm=date.getMinutes();
    var ss=date.getSeconds();
    var dt=date.getDate();
    var mo=date.getMonth();
    var yy=date.getFullYear();
    var day=date.getDay();
    // console.log(hh,mm,ss,dt,mo,yy,day);
    var am_pm="AM"
    if(hh>=12)
    {
        am_pm="PM"
    if(hh>12)
    {
        hh-=12;
    }
}
if(hh==0)
{
    hh=12
}
if(mo==0)
{
    mo="jan"
}
else if(mo==1)
{
    mo="feb"
}
else if(mo==2)
{
    mo="mar"
}
else if(mo==3)
{
    mo="apl"
}
else if(mo==4)
{
    mo="may"
}
else if(mo==5)
{
    mo="june"
}
else if(mo==6)
{
    mo="jul"
}
else if(mo==7)
{
    mo="aug"
}
else if(mo==1)
{
    mo="feb"
}
else if(mo==1)
{
    mo="feb"
}
else if(mo==1)
{
    mo="feb"
}
else if(mo==1)
{
    mo="feb"
}




digiclk()