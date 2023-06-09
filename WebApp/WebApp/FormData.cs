using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using dal1;

namespace WebApp
{
    public class FormData
    {
        public string AccountName { get; set; }
        public string Currency { get; set; }
        public string AccountType { get; set; }
        public double TransferAmount { get; set; }
        public Owner_tbl[] Owners { get; set; }
    }
}