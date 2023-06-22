export default {  
    data() {  
        return {  
            users : [
                {
                    id : 1,
                    firstname : "Jean",
                    lastname : "Neymar",
                    email : "jean.neymar@rlb.fr",
                    isActive : "Actif"
                },
                {
                    id : 2,
                    firstname : "Samuel",
                    lastname : "Ropierd",
                    email : "samro@hotmail.fr",
                    isActive : "Inactif"
                },
                {
                    id : 3,
                    firstname : "Julie",
                    lastname : "Monnade",
                    email : "ju.limo@hotmail.fr",
                    isActive : "Inactif"
                },
                {
                    id : 4,
                    firstname : "Céline",
                    lastname : "Didion",
                    email : "almost-diva@musical.io",
                    isActive : "Actif"
                },
                {
                    id : 5,
                    firstname : "Loic",
                    lastname : "Grenac'h",
                    email : "logr@proton.bzh",
                    isActive : "Actif"
                }
            ]
        }  
    }, 
    methods : {  
        userStatus(event)
        {
            for (let user of this.users)
            {
                if (event.target.isActive === "Actif")
                {
                    user.isActive = "Inactif";
                }
                else if (event.target.isActive === "Inactif")
                {
                    user.isActive = "Actif";
                }
            }
        }
    }  
}