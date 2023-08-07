export default function HobbyLinks() {
    let hobbyLinks= ["https://www.espn.com/fantasy/football/", "https://www.netflix.com/", "https://www.myultrazone.com/"];

    return (
    <div>
        <div><a href ={hobbyLinks[0]}> Fantasy Football</a></div>
        <div><a href ={hobbyLinks[1]}> Netflix</a></div>
        <div><a href ={hobbyLinks[2]}> Laser Tag</a></div>
    </div>
    )

}