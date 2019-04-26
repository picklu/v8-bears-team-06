import React from "react";
import Link from "next/link";
import Layout from "../components/layouts/Layout";

const Index = () => (
  <Layout>
    <div className="bg">
      <h1>goodWork</h1>
      <h3>Where charities and volunteers meet!</h3>
      <div className="buttons">
        <Link href="/charities">
          <a role="button" className="btn btn-success">
            {"I'm a charity"}
          </a>
        </Link>
        <Link href="/volunteers">
          <a role="button" className="btn btn-warning ml-5">
            {"I'm a volunteer"}
          </a>
        </Link>
      </div>
    </div>
    <style>{`

      .buttons {
        flex-direction: row;
      }

      .btn-outline-success {
        margin-left: 30px;
      }

      h1 {
        font-size: 64px;
        font-weight: 700;
        margin: 0 0 65px 0;
        color: #2c3e50;
      }

      h3 {
        color: #2c3e50;
        margin-bottom: 40px;
      }

      .bg {
        display: flex;
        flex-direction: column;
        background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(../static/leone.jpg);
        height: 100vh;
        min-height: 500px;
        width: 100vw;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        position: relative;
        justify-content: center;
        text-align: center;
      }
    `}</style>
  </Layout>
);

export default Index;
