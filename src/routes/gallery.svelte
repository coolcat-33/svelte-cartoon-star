<script>
    import { FileUploader } from "carbon-components-svelte";
    import { Button } from "carbon-components-svelte";
    import Add from "carbon-icons-svelte/lib/Add.svelte";
    import Close from "carbon-icons-svelte/lib/Close.svelte";
    import { cartoons } from "../stores/cartoons.js";
    import { user } from "../stores/user.js";
    //import Gallery from 'svelte-gallery';
    import Gallery from "svelte-image-gallery";
    import Card, {
        Content,
        PrimaryAction,
        Media,
        MediaContent,
        Actions,
        ActionButtons,
        ActionIcons,
    } from "@smui/card";
    // import Button, { Label } from '@smui/button';
    import { Grid, Row, Column } from "carbon-components-svelte";
    import IconButton, { Icon } from "@smui/icon-button";
    import PdfViewer from 'svelte-pdf';
import { ClosedCaptionFilled } from "carbon-icons-svelte";

    async function upload() {
        const client = filestack.init("ALqjJdltnSryUSXJeNMxVz");

        async function uploadDone(result) {
            console.log(JSON.stringify(result));
            const cartoon = new Parse.Object("cartoon");
            cartoon.set("filename", result.filesUploaded[0].filename);
            cartoon.set("fileHandle", result.filesUploaded[0].handle);
            cartoon.set("type", result.filesUploaded[0].mimetype)
            cartoon.set("url", result.filesUploaded[0].url);
            cartoon.set("user", $user.name);
            cartoon.set("email", $user.email);
            cartoon.set("users_liked", []);

            try {
                //Save the Object
                const result = await cartoon.save();
            } catch (error) {
                alert("Failed to create new object: " + error.message);
            }
        }
        const options = {
            onUploadDone: uploadDone,
            maxSize: 10 * 1024 * 1024,
            accept: ["image/*", ".pdf"],
            uploadInBackground: false,
        };
        client.picker(options).open();
    }
    let rowHeight = 200;
    function like(cartoon) {
        if (cartoon.users_liked.includes($user.name)) {
            let index = cartoon.users_liked.indexOf($user.name);
            cartoon.users_liked.splice(index, 1);
            cartoon.likes -= 1;
            $cartoons = $cartoons;
        } else {
            cartoon.users_liked.push($user.name);
            cartoon.likes += 1;
            $cartoons = $cartoons;
        }
        //const Cartoon = Parse.Object.extend("cartoon");
        const obj = cartoon.object;
        obj.set("users_liked", cartoon.users_liked);
        obj.set("stars", cartoon.likes);
        obj.save();
    }
    let pdfURL = ''
    function onClick(cartoon) {
        if (cartoon.type == 'application/pdf') {
            pdfURL = cartoon['url'];
            document.getElementById("modal02").style.display = "block";
        } else {
            
            document.getElementById("cartoon").src = cartoon['url'];
            document.getElementById("modal01").style.display = "block";
        }
        
    }
    function closePDF() {
        document.getElementById('modal02').style.display = 'none'
    }
</script>

<Button icon={Add} on:click={upload}>Upload Your Cartoon</Button>
<div id='modal01' onclick="this.style.display='none'">
    <img style='height:100%;' id='cartoon' />
</div>
<div id='modal02' >
    {#if pdfURL}

    <Button class="btn-overlay" icon={Close} iconDescription='Close' on:click={()=> closePDF()}>Close file </Button>
    <PdfViewer  url={pdfURL}/>
    {/if}
</div>
<!-- <Gallery>
    {#each $cartoons as cartoon}
    
      <img src="{cartoon.url}"> 
    
      {/each}
  </Gallery> -->
<Grid fullWidth noGutterLeft>
    <Row>
        <!-- <Column> -->
        {#each $cartoons as cartoon}
            <div class="card-container">
                <Card>
                    
                    <img src={cartoon.url} width="200px" height="200px" on:click="{()=> onClick(cartoon)}"/>
                    
                    <Actions>
                        {#if cartoon.users_liked.includes($user.name)}
                            <IconButton on:click={() => like(cartoon)}>
                                <Icon class="material-icons">favorite</Icon>
                            </IconButton>
                        {:else}
                            <IconButton on:click={() => like(cartoon)}>
                                <Icon class="material-icons"
                                    >favorite_border</Icon
                                >
                            </IconButton>
                        {/if}

                        <!-- <IconButton
                    class="material-icons"
                    on:click={() => clicked++}
                    title="More options">more_vert</IconButton
                > -->
                    </Actions>
                </Card>
            </div>
        {/each}
        <!-- </Column> -->
    </Row>
    
</Grid>

<style>
:global(.btn-overlay) {
    position: absolute;
    padding: 10;
    top: 200px;
    right: 100px;
}
</style>



