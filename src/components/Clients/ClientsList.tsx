import React, {SyntheticEvent} from "react";
import {User} from "@styled-icons/boxicons-regular";
import {Trash, Hand} from "@styled-icons/boxicons-solid";
import {ClientType} from "types";

interface Props {
    listClient: ClientType[],
    clickDel: (e:SyntheticEvent)=>void
    clickBan: (e:SyntheticEvent)=>void
}

export const ClientsList = (props: Props) => {

    return (
        <>
            {
                props.listClient.map(client => (
                    <div className={client.ban ? "Clients__item banned" : "Clients__item"} key={client.id} id={client.id}>

                        <p><User size="25"/></p>
                        <p>{client.name}</p>
                        <p>{client.surname}</p>
                        <p>{client.address}<br/>{client.code} {client.city}</p>
                        <p>{client.phone}</p>
                        <p>{client.gender}</p>
                        <p>{client.birth.slice(0, 10)}</p>
                        <p>{client.email}</p>
                        <p><Trash size="25" color="red"
                                  style={client.ban ? {cursor: 'pointer', color: 'white'} : {cursor: "pointer"}} onClick={props.clickDel}/><Hand
                            size="25" color="red"
                            style={client.ban ? {cursor: 'pointer', color: 'white'} : {cursor: "pointer"}} onClick={props.clickBan}/>
                        </p>

                    </div>
                ))
            }
        </>

    )
}
