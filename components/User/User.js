import Table from "components/Posts";
import renderPosts from "components/Posts/renderPosts";
import React, { useEffect, useState } from "react";
import { API } from "resources";
import styled from "styled-components";

export default function User({ data }) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    if (!data) return;
    API.get("/users/" + data.id + "/posts").then((res) => {
      if (res.data) {
        setPosts(res.data);
      } else throw Error("No data returned");
    });
  }, [data]);

  return (
    data && (
      <_User>
        <div className="info">
          <div>
            <h2 className="name title italic">{data.name}</h2>[{data.username}]
          </div>
          <a href={"https://" + data.website}>{data.website}</a>
        </div>
        <div className="title">Contact</div>
        <div className="contact">
          <a href={"mailto:" + data.email}>{data.email}</a>
          <a href={"tel:" + data.phone}>{data.phone}</a>
        </div>
        <div className="address-company">
          <div>
            <div className="title">Address</div>
            <div>
              {data.address.street}, {data.address.suite}
            </div>
            <div>{data.address.city}</div>
            {data.address.zipcode}
          </div>
          <div>
            <div className="title">Company</div>
            <div className="italic">{data.company.name}</div>
            <div className="italic">"{data.company.catchPhrase}"</div>
            <div>[{data.company.bs.split(" ").join(", ")}]</div>
          </div>
        </div>
        <Table data={posts} small title="More from this author" />
      </_User>
    )
  );
}

const _User = styled.div`
  word-break: break-word;

  .title {
    color: #b08f26;
    font-weight: 600;
    margin-bottom: 8px;
  }

  .italic {
    font-style: italic;
  }

  .name {
    color: black;
    display: inline-block;

    font-size: 1.3em;

    margin: 40px 16px 16px 16px;
  }

  > div {
    position: relative;
    width: 100%;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    align-items: baseline;
  }

  .info {
    margin-bottom: 16px;

    > div {
      display: flex;
      flex-flow: row nowrap;
      align-items: baseline;
    }
  }

  .contact {
    justify-content: space-around;

    > :nth-child(1) {
      margin-right: 8px;
    }

    > a {
      text-decoration: none;
    }
  }

  .address-company > div {
    margin: 24px 0 32px 0;
    width: 50%;

    font-size: 0.85em;
    text-align: center;

    > .title {
      color: #b08f26;
      font-size: 1.1em;
    }

    > :nth-child(2) {
      font-weight: 600;
    }

    > :nth-child(4) {
      font-size: 0.8em;
    }
  }

  * a {
    color: #68707c;
    font-size: 0.9em;
    transition: color 0.3s ease;

    :hover {
      color: #b08f26;
    }

    :active {
      transition: color 0.2s ease;
      color: #d4af37;
    }
  }

  > :last-child > tbody {
    display: block;
    overflow: auto;
    height: 325px;
    width: 100%;
  }
`;
