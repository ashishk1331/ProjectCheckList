import { supabase } from "../util/SupabaseClient";
import Button from "./Button";
import { formatDistance, subDays } from "date-fns";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Header(props) {

    return (
        <header className="flex flex-wrap items-center gap-3 mt-36 md:mt-24">
            <Image
                src={props.icon}
                width={520}
                height={520}
                alt="Rocklee"
                className="rounded-full w-28 md:w-48 h-28 md:h-48 aspect-square border-2 bg-white"
            />
            <div className="flex flex-col order-last w-full sm:w-fit sm:order-none items-left gap-1 mt-auto mb-1">
                <h1 className="text-4xl font-medium">{
                    props.user ? props.user.email.substring(0, props.user.email.indexOf('@')) : props.title
                }</h1>
                <p>
                    last edited
                    {" "}
                    {formatDistance(new Date(), new Date(props.editedAt), {
                        addSuffix: true,
                    })}
                </p>
            </div>
            {
                props.user ? 
                <Button cl="mt-auto ml-auto" onClick={props.handleSignOut}>Log out</Button>
                :
                <Link href="/login" className="mt-auto ml-auto">
                    <Button>Log in</Button>
                </Link>
            }
        </header>
    );
}
