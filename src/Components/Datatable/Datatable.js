import React from 'react';
import EditIco from "../Images/edit-ico.svg";
import DeleteIco from "../Images/trash-ico.svg";
import ArrowLeft from "../Images/arrow-left-ico.svg";
import ArrowRight from "../Images/arrow-right-ico.svg";

export default function Datatable() {
    return (
        <div>
            <div className="table-common-info">
                <div className="table-responsive">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>REF Code</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Phone No.</th>
                                <th>Balance</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>JIBA187</td>
                                <td>Jitndra p</td>
                                <td>jppatel10061972@gmail.com </td>
                                <td>9574450933</td>
                                <td>0</td>
                                <td>
                                    <div className="text-center action-btns-tbl">
                                        <button type="button">
                                            <img src={EditIco} className="mx-2" loading="lazy" alt="" />
                                        </button>
                                        <button type="button">
                                            <img src={DeleteIco} className="mx-2" loading="lazy" alt="" />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>JIBA187</td>
                                <td>Jitndra p</td>
                                <td>jppatel10061972@gmail.com </td>
                                <td>9574450933</td>
                                <td>0</td>
                                <td>
                                    <div className="text-center action-btns-tbl">
                                        <button type="button">
                                            <img src={EditIco} className="mx-2" loading="lazy" alt="" />
                                        </button>
                                        <button type="button">
                                            <img src={DeleteIco} className="mx-2" loading="lazy" alt="" />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>JIBA187</td>
                                <td>Jitndra p</td>
                                <td>jppatel10061972@gmail.com </td>
                                <td>9574450933</td>
                                <td>0</td>
                                <td>
                                    <div className="text-center action-btns-tbl">
                                        <button type="button">
                                            <img src={EditIco} className="mx-2" loading="lazy" alt="" />
                                        </button>
                                        <button type="button">
                                            <img src={DeleteIco} className="mx-2" loading="lazy" alt="" />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>JIBA187</td>
                                <td>Jitndra p</td>
                                <td>jppatel10061972@gmail.com </td>
                                <td>9574450933</td>
                                <td>0</td>
                                <td>
                                    <div className="text-center action-btns-tbl">
                                        <button type="button">
                                            <img src={EditIco} className="mx-2" loading="lazy" alt="" />
                                        </button>
                                        <button type="button">
                                            <img src={DeleteIco} className="mx-2" loading="lazy" alt="" />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>JIBA187</td>
                                <td>Jitndra p</td>
                                <td>jppatel10061972@gmail.com </td>
                                <td>9574450933</td>
                                <td>0</td>
                                <td>
                                    <div className="text-center action-btns-tbl">
                                        <button type="button">
                                            <img src={EditIco} className="mx-2" loading="lazy" alt="" />
                                        </button>
                                        <button type="button">
                                            <img src={DeleteIco} className="mx-2" loading="lazy" alt="" />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="table-common-ftr">
                <div className="row me-0">
                    <div className="col-md-6 pe-0">
                        <div className="d-md-inline-flex d-flex align-items-center btm-tbl-text">
                            <span className="me-2 d-block">Show rows</span>
                            <select className="form-select form-style-input">
                                <option selected>Select items</option>
                                <option value="1">5 items</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-md-6 pe-0">
                        <div className="d-flex align-items-center justify-content-md-end justify-content-center pagination-style-tbl mt-3 mt-md-0">
                            <button type="button">
                                <img src={ArrowLeft} loading="lazy" alt="" />
                            </button>
                            <button type="button">1</button>
                            <button type="button" className="active">
                                2
                            </button>
                            <button type="button">3</button>
                            <button type="button">
                                <img src={ArrowRight} loading="lazy" alt="" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}