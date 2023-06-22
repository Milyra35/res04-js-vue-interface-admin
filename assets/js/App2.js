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
        userStatus(user)
        {
            if (user.isActive === "Actif")
            {
                user.isActive = "Inactif";
            }
            else if (user.isActive === "Inactif")
            {
                user.isActive = "Actif";
            }
        },
        addUser()
        {
            let firstname = document.getElementById("firstname").value;
            let lastname = document.getElementById("lastname").value;
            let email = document.getElementById("email").value;
            let id = this.users.length + 1;
            
            let newUser = {id : id,
                           firstname : firstname,
                           lastname : lastname,
                           email : email,
                           isActive : "Actif"};
            this.users.push(newUser);
            console.log(this.users);
        },
        changeUser(user)
        {
            let td = document.querySelector("tbody tr td:last-of-type");
            // let form = document.createElement("form");
            let input = document.createElement("input");
            input.setAttribute("type", "text");

            // form.appendChild(input);
            td.appendChild(input);
            input.value = user.firstname;
            // user.firstname = input.value;
        }
    }  
}