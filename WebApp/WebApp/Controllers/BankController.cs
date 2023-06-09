using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Cors;
using System.Web.Http.Cors;
using dal1;


namespace WebApp.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class BankController : Controller
    {


        // POST: Bank/Create
        [HttpPost]
        public bool Create(FormData formData)
        {

            //Check OwnerID
            bool legalID = formData.Owners.ToList().All(x => IsLegalId(x.OwnerID));
            if (!legalID)
                return false;

            BankDBEntities bankDBEntities = new BankDBEntities();

            //Add the new account
            Account_tbl account = bankDBEntities.Account_tbl.Add(new Account_tbl() { AccountName = formData.AccountName, Currency = formData.Currency, AccountType = formData.AccountType, TransferAmount = (decimal)formData.TransferAmount});


            List<Owner_tbl> owners = new List<Owner_tbl>();
            foreach (Owner_tbl owner in owners)
            {
                if (!IsExist(owner))
                    bankDBEntities.Owner_tbl.Add(owner);
                bankDBEntities.Account_tbl.ToList().Find(x => x.AccountID == account.AccountID).Owner_tbl.ToList().Add(owner);
            }
            bankDBEntities.SaveChanges();
            return true;

        }


        /// <summary>
        /// Check if current id exsist in owner_tbl
        /// </summary>
        /// <param name="owner"></param>
        /// <returns></returns>
        public bool IsExist(Owner_tbl owner)
        {
            BankDBEntities bankDBEntities = new BankDBEntities();
            return bankDBEntities.Owner_tbl.ToList().Contains(owner);
        }


        /// <summary>
        /// Verification of the correctness of an identity number
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        public bool IsLegalId(string id)
        {
            int x;
            if (!int.TryParse(id, out x))
                return false;
            if (id.Length < 5 || id.Length > 9)
                return false;
            for (int i = id.Length; i < 9; i++)
                id = "0" + id;
            int sum = 0;
            for (int i = 0; i < 9; i++)
            {
                int k = ((i % 2) + 1) * (Convert.ToInt32(id[i]) - '0');
                if (k > 9)
                    k -= 9;
                sum += k;
            }
            return sum % 10 == 0;
        }
    }
}
