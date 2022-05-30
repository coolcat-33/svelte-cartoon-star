<script>
    import {
      DataTable,
      Toolbar,
      ToolbarContent,
      ToolbarSearch,
      ToolbarMenu,
      ToolbarMenuItem,
      Button,
    } from "carbon-components-svelte";

    import {cartoons} from "../stores/cartoons"
    import { onDestroy } from 'svelte'
    
    let users = []

      
    const unsubscribe = cartoons.subscribe(cartoons => {
      console.log(users)
        for ( let i= 0; i < cartoons.length; i++) {
            let cartoon = cartoons[i]
            let XP = parseInt(cartoon['likes']) * 10
            let email = cartoon['email']
            let user = cartoon['user']
            let found = users.findIndex(element => element.user == user)
            if (found != -1) {
                users[found]['XP'] += XP
            } else {
              
                users.push({id:i+1, user, XP, email})
            }
        }
        users.sort((a,b) => {a.XP < b.XP})
        console.log(users)
    })

    
    onDestroy(unsubscribe)
  
    // let rows = Array.from({ length: 10 }).map((_, i) => ({
    //   id: i,
    //   name: users[i]["user"],
    //   email: users[i]["email"],
    //   XP: users[i]["XP"]
    // }));
  </script>
  
  <DataTable
    sortable
    title="Leaderboard"
    description="Look at the Leaderboard to see the users and their XP points"
    headers={[
      { key: "user", value: "Name" },
      { key: "email", value: "Email" },
      { key: "XP", value: "XP" }
    ]}
    rows={users}
  >
    <Toolbar>
      <ToolbarContent>
        <ToolbarSearch persistent value="" shouldFilterRows />
      </ToolbarContent>
    </Toolbar>
  </DataTable>
  