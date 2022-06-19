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
                    <div className={client.ban ? "Clients__item banned" : "Clients__item"} key={client.id} id={client.id} data-name={`${client.name} ${client.surname}`}>

                        <p><User size="25"/></p>
                        <p>{client.name}</p>
                        <p>{client.surname}</p>
                        <p>{client.address}<br/>{client.code} {client.city}</p>
                        <p>{client.phone}</p>
                        <p>{client.gender}</p>
                        <p>{client.birth.slice(0, 10)}</p>
                        <p>{client.email}</p>
                        <p><Trash size="25" color="red"
                                  style={{cursor: 'pointer'}} className="bx-trash-alt" onClick={props.clickDel}/><Hand
                            size="25" color="red"
                            style={{cursor: 'pointer'}} className="bxs-hand" onClick={props.clickBan}/>
                        </p>

                    </div>
                ))
            }
        </>

    )
}
