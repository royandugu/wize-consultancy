Folder structuring 

1. The actual content consists inside the components folder 
2. adminComponents are the components that can be viewed only by the Admin
                ||

        Primary components are the main 
        reusable components includes header
        and footer 

                ||

        Secondary components are the individual 
        components that includes other individual page
        details

                || 

        System components include the components that are
        common to both admin and the users. They can be like the 
        sky blue wrappers and all.
        | - Static components : These are the static components
        | - Common components : These are the components common to both user and admin
        |

3. userComponents are the components that can be viewed by users
4. Inside each individual component folder the componentnameDisplay is the one that displays to the front end
5. The very parent container div have a class same as the class name