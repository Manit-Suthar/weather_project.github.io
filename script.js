let theme=document.querySelector("#mode");
const btn=document.getElementById("search-button");
let cityLocation=document.getElementById("cityLocation");
let temp=document.getElementById("temp");
let rain=document.getElementById("rain");


async function getData(cityName){
	const promise = await fetch(`https://api.weatherapi.com/v1/current.json?key=ff2c8ba441ac45e189694017241910&q=${cityName}&aqi=yes`);
	return await promise.json();
}


btn.addEventListener("click", async ()=> {
	const city = nameOfCity.value;
	const result= await getData(city);
	cityLocation.innerText=`${result.location.name}-${result.location.region}-${result.location.country}`;
	temp.innerText=result.current.temp_c;
	rain.innerText=result.current.cloud;
	console.log(result);
})

/* btn.addEventListener("click", async ()=> {
	const value= cities.value;
	const result= await getData(value);
	cityLocation.innerText=`${result.location.name},${result.location.region},${result.location.country}`;
	temp.innerText=result.current.temp_c;
	rain.innerText=result.current.cloud;
	console.log(result);
}) */


let home=document.querySelector("#home");
	home.addEventListener("click", () => {
		alert("U ARE ON HOME PAGE ALREADY");
	})
	
let currtheme="light";

theme.addEventListener("click", () => {
	if (currtheme === "light")
	{
		currtheme="dark";
		//document.querySelector("body").style.backgroundColor="black";
		document.querySelector("body").classList.add("dark");
		document.querySelector("body").classList.remove("light");
		
		
	}
	else{
		currtheme="light";
		document.querySelector("body").classList.remove("dark");
		document.querySelector("body").classList.add("light");
		//document.querySelector("body").style.backgroundColor="white";
		//document.querySelector("body").style.backgroundColor="dark"
	}
	console.log(currtheme);

	
})
