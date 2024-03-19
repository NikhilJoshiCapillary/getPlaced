import React, { useState, useEffect } from "react"; // Import useState and useEffect
import { Table } from "antd";
import { data } from "../../data/data";
import homeStyle from "./homeStyle.css";
import { connect } from "react-redux";
import global from "./reducers";
import { getAllJobsDB } from "../../api.js";
import { applyJob } from "../../api.js";
import { applyForJob } from "./actions.js";
import { useSelector, useDispatch } from "react-redux";
import { getAppliedJobsArray } from "../../api.js";
import Navbar from "../../molecules/Navbar.js";

function Home({ jobs, getAllJobs }) {
  const [dataset, setDataset] = useState([]);
  const [array, setArray] = useState([]);
  const dispatch = useDispatch();
  async function some() {
    const result = await getAllJobsDB();
    console.log(result.result);
    return result.result;
  }
  useEffect(() => {
    const email = localStorage.getItem("user-email");
    const clean_user_email = email.replace(/"/g, "");
    getAppliedJobsArray(clean_user_email)
      .then((result) => {
        console.log("initial", result);
        setArray(result.result);
        console.log("final", array);
        localStorage.setItem("appliedJobs", JSON.stringify(result.result));
      })
      .catch((err) => {
        console.log("Error occurred while fetching applied jobs:", err);
      });
  }, []);

  useEffect(() => {
    getAllJobsDB()
      .then((result) => {
        setDataset(result.result);
      })
      .catch((error) => {
        console.error("Error fetching jobs:", error);
      });
  }, []);

  function applyOnClick(i) {
    const user_email = localStorage.getItem("user-email");

    const clean_user_email = user_email.replace(/"/g, "");

    console.log("HAHA", clean_user_email, i);
    dispatch(applyForJob({ payload: { i, clean_user_email } }));
    window.location.reload();
  }

  const columns = [
    {
      title: "Company",
      dataIndex: "company",
      key: "company",
      //   render: (text) => <a>{text}</a>,
    },
    {
      title: "Profile",
      dataIndex: "profile",
      key: "profile",
    },
    {
      title: "Package",
      dataIndex: "package",
      key: "package",
    },
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
      render: (text, record, index) => {
        const already_applied = array.includes(JSON.stringify(record.id));

        return (
          <>
            {!already_applied ? (
              <button type="button" onClick={() => applyOnClick(record.id)}>
                Apply
              </button>
            ) : null}
          </>
        );
      },
    },
  ];

  return (
    <>
      {/* <h2>getPlaced-Your Job Our Guarantee</h2> */}
      <Navbar />
      <Table
        className="main-table"
        columns={columns}
        dataSource={dataset}
        rowKey={(record) => record.id}
      />
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    jobs: state.global,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getAllJobs: () => dispatch(applyForJob()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
