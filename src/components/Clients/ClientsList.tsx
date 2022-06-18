import React from "react";
import {User} from "@styled-icons/boxicons-regular";
import {Trash, Hand} from "@styled-icons/boxicons-solid";
import {ClientType} from "types";

interface Props {
    listClient: ClientType[],
}

export const ClientsList = (props: Props) => {

    return (
        <>
            {
                props.listClient.map(client => (
                    <div className="Clients__item" key={client.id}>

                        <p><User size="25"/></p>
                        <p>{client.name}</p>
                        <p>{client.surname}</p>
                        <p>{client.address}<br/>{client.code} {client.city}</p>
                        <p>{client.phone}</p>
                        <p>{client.gender}</p>
                        <p>{client.birth.slice(0, 10)}</p>
                        <p>{client.mail}</p>
                        <p><Trash size="25" color="red" style={{cursor: 'pointer'}}/><Hand size="25" color="red"
                                                                                           style={{cursor: 'pointer'}}/>
                        </p>

                    </div>
                ))
            }
        </>

    )
}
